<template>
    <v-card class="mx-auto elevation-12 col-md-4 mt-12" max-width="600">
    <v-form>
      <v-text-field
        v-model="title"
        label="Title"
      ></v-text-field>
      <tiptap-vuetify
        v-model="content"
        :extensions="extensions"
      />
      <v-btn type="submit" to="/feeds">Submit</v-btn>
    </v-form>
    </v-card>
</template>

<script>
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History, Image } from 'tiptap-vuetify'

export default {
  components: {
    TiptapVuetify
  },
  data: () => ({
    title: '',
    comment: '',
    file: null
  }),
  methods: {
    upload (file) {
      this.file = file
      console.log(file)
    }
  },
  extensions: [
    History,
    Blockquote,
    Link,
    Underline,
    Strike,
    Italic,
    ListItem,
    BulletList,
    OrderedList,
    Image,
    [Heading, {
      options: {
        levels: [1, 2, 3]
      }
    }],
    Bold,
    Code,
    HorizontalRule,
    Paragraph,
    HardBreak
    ]
  }
</script>