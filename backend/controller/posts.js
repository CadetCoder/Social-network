const sql = require('../mysql');
const fs = require('fs');

exports.createPosts = (req, res, next) => {
        console.log(req.file);
        let image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
        let tokenUser = req.params.tokenUser;
        let content = req.body.content;
        let postSQL =
        `INSERT INTO posts (imageUrl, content, user_id, post_create)
        VALUES ('${image}', '${content}', '${user_id}', NOW());`;
        sql.query(postSQL, function (err, result) {
            if (result) {
                res.status(200).json({ result })
            } else {
                res.status(401).json({ message: "New post not posted!" })
            }
        })
};

exports.getAllPosts = (req, res, next) => {
        let allPostReq =
        `SELECT
        users.first_name,
        users.last_name,
        posts.content,
        posts.imageUrl,
        users.token_user,
        posts.id,
        posts.likes_number,
        posts.dislikes_number,
        users.isAdmin,
        DATE_FORMAT(posts.post_create, 'the %e %M %Y à %kh%i')
        AS post_create
        FROM posts 
        INNER JOIN users ON users.id = post.user_id
        ORDER BY posts.post_create DESC;`;
        sql.query(allPostReq, function (err, result) {
            if (result.length > 0) {
                return res.status(200).json({ result })
            } else {
                return res.status(403).json({ message: "No post was found!" })
            }
        })
};

exports.getPostsUser = (req, res, next) => {
        let token_user = req.params.token_user;
        let onePostsReq =
        `SELECT
            users.first_name,
            users.last_name,
            posts.content,
            posts.id,
            posts.imageUrl,
            users.token_user,
            posts.likes_number,
            users.isAdmin,
            posts.dislikes_number,
        DATE_FORMAT(posts.post_create, 'the %e %M %Y à %kh%i') AS post_create FROM posts INNER JOIN users ON posts.user_id = users.token_user
        WHERE users.token_user = '${token_user}'
        ORDER BY posts.post_create DESC;`;
        sql.query(onePostsReq, function (err, result) {
            if (result.length > 0) {
                return res.status(200).json({ result })
            } else {
                return res.status(403).json({ message: "No post was found!" })
            }
        })
};

exports.getOnePostId = (req, res, next) => {
        let post_id = req.params.id;
        let onePostsReq =
            `SELECT
                users.first_name,
                users.last_name,
                posts.content,
                posts.id,
                users.isAdmin,
                posts.imageUrl,
                posts.likes_number,
                posts.dislikes_number,
                DATE_FORMAT(posts.post_create, 'the %e %M %Y à %kh%i') AS post_create
                FROM posts
                INNER JOIN users ON users.token_user = users.token_user
                WHERE posts.id = '${post_id}';`;
        sql.query(onePostsReq, function (err, result) {
            if (result.length > 0) {
                return res.status(200).json({ result })
            } else {
                return res.status(403).json({ message: 'Err 403' })
            }
        })
};

exports.modifyPosts = (req, res, next) => {
        let modifyContent = req.body.content;
        let image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
        let post_id = req.params.id;
        let SQLModify =
            `UPDATE posts
            SET content = '${modifyContent}',
            imageUrl = '${image}'
            WHERE id = '${post_id}'`;
        sql.query(SQLModify, function (err, result) {
            if (result) {
                return res.status(200).json({ message: 'Post successfully modified!' })
            } else {
                return res.status(403).json({ err })
            }
        })
};

exports.deletePosts = (req, res, next) => {
        let post_id = req.params.id;
        let SQLDrop = 
            `DELETE FROM posts
            WHERE id = '${post_id}'`;
        sql.query(SQLDrop, function (err, result) {
            if (result) {
                return res.status(200).json({ message: "Post deleted successfully!" })
            } else {
                return res.status(403).json({ err })
            }
        })
};

exports.getAllcomments = (req, res, next) => {
        let post_id = req.params.id;
        let displayComments =
            `SELECT
                comments.content,
                comments.date_comment,
                comments.id,
                users.first_name,
                users.last_name,
                comments.token_user,
                FROM comments
                INNER JOIN users ON comments.token_user = users.user_id
                WHERE post_id = ${post_id};`
        sql.query(displayComments, function (err, result) {
            if (result) {
                return res.status(200).json({ result })
            } else {
                return res.status(403).json({ err })
            }
        })
};

exports.postComments = (req, res, next) => {
        let token_user = req.params.token_user;
        let post_id = req.params.id;
        let postContent = req.body.content;
        let SQLComments =
            `INSERT INTO comments (
                content,
                post_id,
                token_user,
                date_comment)
                    VALUES (
                        '${postContent}',
                        '${post_id}',
                        '${token_user}',
                        NOW());`;
        sql.query(SQLComments, function (err, result) {
            if (result) {
                return res.status(200).json({ message: "Comment posted successfully" })
            } else {
                return res.status(403).json({ message: err })
            }
        })
};

exports.modifyComments = (req, res, next) => {
        let token_user = req.params.token_user;
        let id = req.params.id;
        let postContent = req.body.content;
        let SQLModifyComments =
            `UPDATE comments
            SET content = '${postContent}',
                token_user = '${token_user}',
                date_comment = NOW()
                WHERE token_user = '${token_user}'
                AND id = '${id}'`;
        sql.query(SQLModifyComments, function (err, result) {
            if (result) {
                return res.status(200).json({ message: "Comment modified successfully!" })
            } else {
                return res.status(403).json({ err })
            }
        })
};

exports.deleteComments = (req, res, next) => {
        let idComments = req.params.id;
        let token_user = req.params.token_user;
        let SQLDeleteComments =
            `DELETE FROM comments
            WHERE token_user = '${token_user}' AND id = '${idComments}'`;
        sql.query(SQLDeleteComments, function (err, result) {
            if (result) {
                return res.status(200).json({ message: "Comment deleted successfully!" })
            } else {
                return res.status(403).json({ err })
            }
        })
};

exports.postLikes = (req, res, next) => {
    let token_user = req.body.token_user;
    let post_id = req.params.id;
    let ifExists = " \
        SELECT IF (EXISTS (SELECT * FROM likes WHERE token_user = '" + token_user + "' AND post_id = '" + post_id + "'), '1', '0') \
        UNION ALL \
        SELECT IF (EXISTS (SELECT * FROM dislikes WHERE token_user = '" + token_user + "' AND post_id = '" + post_id + "'), '1', '0')";
    sql.query(ifExists, function (err, result) {
        var valueOne = parseInt(Object.values(result[0]))
        var valueTwo = parseInt(Object.values(result[1]))
        switch (valueOne) {
            case 0:
                let addLike = " \
                    INSERT INTO likes (token_user, post_id) VALUES ('" + token_user + "', '" + post_id + "'); \
                    UPDATE Posts SET likes_number = likes_number +1 WHERE id = '" + post_id + "' \
                ";
                sql.query(addLike, function (err, result) {
                    if (result) {
                        switch (valueTwo) {
                            case 0:
                                return res.status(200).json({ message: "Post like!" })
                                break
                            case 1:
                                let addLikeAndRemoveDislike = " \
                                    DELETE FROM dislikes WHERE token_user = '" + token_user + "' AND post_id = '" + post_id + "';\
                                    UPDATE Posts SET dislikes_number = dislikes_number -1 WHERE id = '" + post_id + "' \
                                ";
                                sql.query(addLikeAndRemoveDislike, function (err, result) {
                                    if (result) {
                                        return res.status(200).json({ message: "Like or dislike cancelled!" })
                                    } else {
                                        return res.status(403).json({ message: "Error occured !" })
                                    }
                                })
                                break
                            default:
                                return res.status(404).json({ message: "An error has occurred in case of 0 switch!" })
                        }
                    } else {
                        return res.status(403).json({ message: "An error has occurred!" })
                    }
                })
                break;
            case 1:
                let removeLike = " \
                    DELETE FROM likes WHERE token_user = '" + token_user + "' AND post_id = '" + post_id + "'; \
                    UPDATE Posts SET likes_number = likes_number -1 WHERE id = '" + post_id + "' \
                " ;
                sql.query(removeLike, function (err, result) {
                    if (result) {
                        return res.status(200).json({ message: "Like was deleted from post!" })
                    } else {
                        return res.status(403).json({ message: "An error has occured!" })
                    }
                })
                break;
            default:
                return res.status(404).json({ message: "An error has occurred !" })
        }
    })
}
exports.postDislike = (req, res, next) => {
    let token_user = req.body.token_user;
    let post_id = req.params.id;
    let ifExists = " \
        SELECT IF (EXISTS (SELECT * FROM dislikes WHERE token_user = '" + token_user + "' AND post_id = '" + post_id + "'), '1', '0')\
        UNION ALL \
        SELECT IF (EXISTS (SELECT * FROM likes WHERE token_user = '" + token_user + "' AND post_id = '" + post_id + "'), '1', '0')";
    sql.query(ifExists, function (err, result) {
        var valueOne = parseInt(Object.values(result[0]))
        var valueTwo = parseInt(Object.values(result[1]))
        switch (valueOne) {
            case 0:
                let addUnlike = " \
                    INSERT INTO dislikes (token_user, post_id) VALUES ('" + token_user + "', '" + post_id + "'); \
                    UPDATE posts SET dislikes_number = dislikes_number +1 WHERE id = '" + post_id + "' \
                ";
                sql.query(addUnlike, function (err, result) {
                    if (result) {
                        switch (valueTwo) {
                            case 0:
                                return res.status(200).json({ message: "Post disliked!" })
                                break
                            case 1:
                                let addUnlikeAndRemoveLike = " \
                                    DELETE FROM likes WHERE token_user = '" + token_user + "' AND post_id = '" + post_id + "';\
                                    UPDATE posts SET likes_number = likes_number -1 WHERE id = '" + post_id + "' \
                                ";
                                sql.query(addUnlikeAndRemoveLike, function (err, result) {
                                    if (result) {
                                        return res.status(200).json({ message: "Like of dislike cancelled!" })
                                    } else {
                                        return res.status(403).json({ message: "An error has occurred!" })
                                    }
                                })
                                break
                            default:
                                return res.status(404).json({ message: "An error has occurred!" })
                        }
                    } else {
                        return res.status(403).json({ message: "Another error has occurred!" })
                    }
                })
                break;
            case 1:
                let removeUnlike = " \
                    DELETE FROM dislikes WHERE token_user = '" + token_user + "' AND post_id = '" + post_id + "'; \
                    UPDATE posts SET dislikes_number = dislikes_number -1 WHERE id = '" + post_id + "' \
                " ;
                sql.query(removeUnlike, function (err, result) {
                    if (result) {
                        return res.status(200).json({ message: "Post disliked" })
                    } else {
                        return res.status(403).json({ message: "An error has occurred !" })
                    }
                })
                break;
            default:
                return res.status(404).json({ message: "An error has occurred !" })
        }
    })
};