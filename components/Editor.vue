<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";


const $t = useI18n().t;
class DalleImageTool {
  data;
  wrapper;
  constructor({ data }) {
    this.data = data;
    this.wrapper = undefined;
  }
  static get toolbox() {
    return {
      title: $t("photoGeneration"),
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }

  render() {
    this.wrapper = document.createElement("div");

    let outputImage = document.createElement("img");
    outputImage.style.width = "100%";
    outputImage.style.height = "300px";
    outputImage.style.objectFit = "cover";
    if (this.data?.outputText === undefined) {
      const input = document.createElement("input");
      input.style.width = "100%";
      input.className = "outline outline-2";

      const button = document.createElement("button");
      button.innerHTML = `
              <div class="flex items-center gap-x-4">
      <div>${$t("imageGenerate")}</div>
       </div>`;
      button.className = "btn btn-primary mt-2";

      this.wrapper.appendChild(input);
      this.wrapper.appendChild(button);
      input.addEventListener("input", (e) => {
        this.data.inputText = e.target.value;
      });
      button.addEventListener("click", async () => {
        button.innerHTML = `
              <div class="flex items-center gap-x-4">
      <div>${$t("imageGenerate")}</div>
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 000"></path>
      </svg>

       </div>`;
        const { data } = await useFetch(`/api/openai/image`, {
          query: {
            text: this.data.inputText,
          },
        });
        console.log(data);
        outputImage.src = data.value;
        this.wrapper.innerHTML = "";
        this.wrapper.appendChild(outputImage);
        this.data.url = data.value;
      });
    }
    return this.wrapper;
  }
  save(blockContent) {
    const block = blockContent.querySelector("img");

    console.log(blockContent, "hmm", blockContent.src);
    return {
      url: this.data.url,
    };
  }
}
class ChatTool {
  data;
  wrapper;
  constructor({ data }) {
    this.data = data;
    this.wrapper = undefined;
  }
  static get toolbox() {
    return {
      title: $t("textGeneration"),
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }

  render() {
    this.wrapper = document.createElement("div");

    let outputInput = document.createElement("textarea");
    outputInput.style.outline = "none";
    outputInput.style.height = "200px";
    outputInput.style.overflow = "visible";
    outputInput.style.width = "100%";
    if (this.data?.outputText === undefined) {
      const input = document.createElement("input");
      input.style.width = "100%";
      input.className = "outline outline-2";
      const button = document.createElement("button");
      button.className = "btn btn-primary mt-2";
      button.innerHTML = `
      <div class="flex items-center gap-x-4">
      <div>${$t("textGenerate")}</div>
       </div>
      `;
      const loadingSpin = document.createElement("AppIcon");
      this.wrapper.appendChild(input);
      this.wrapper.appendChild(button);
      input.addEventListener("input", (e) => {
        this.data.inputText = e.target.value;
      });
      outputInput.addEventListener("input", (e) => {
        if (e.target.value === null || e.target.value === "") {
          this.wrapper.removeChild(outputInput);
        }
      });
      button.addEventListener("click", async () => {
        button.innerHTML = `
              <div class="flex items-center gap-x-4">
      <div>${$t("textGenerate")}</div>
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 000"></path>
      </svg>

       </div>`;
        const { data } = await useFetch(`/api/openai/chat`, {
          query: {
            text: this.data.inputText,
          },
        });
        console.log(data);
        outputInput.value = data.value;
        this.wrapper.innerHTML = "";
        this.wrapper.appendChild(outputInput);
        this.data.outputText = data.value;
      });
    } else {
      const input = document.createElement("input");
      input.textContent = this.data.outputText;
      input.addEventListener("input", (e) => {
        this.data.outputText = e.target.value;
      });
    }
    return this.wrapper;
  }
  save(blockContent) {
    const block = blockContent.querySelector("textarea");
    console.log(blockContent, block);

    return {
      text: block.value,
    };
  }
}

const props = defineProps({
  existingContent: {
    type: Object,
  },
  name: {
    type: String,
    defaultValue: "editor",
  },
});

console.log("EDITOR");
let editor;
const $i18n = useNuxtApp().vueApp.config.globalProperties.$i18n;
const emit = defineEmits([
  "contentChanged",
  "contentChanging",
  "update:modelValue",
]);
const VueAppConfig = useNuxtApp().vueApp.config.globalProperties;
const nameRef = toRef(props, "name");

async function onChange() {
  try {
    console.log(editor);
    emit("contentChanging");
    const updatedData = await editor.save();
    emit("contentChanged", updatedData);
  } catch (error) {}
}

async function uploadImage(image) {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await useFetch(`/api/editor/image`, {
    method: "POST",
    body: formData,
  });
  return data.value;
}
onMounted(async () => {
  setTimeout(async () => {
    editor = editor = await new EditorJS({
      holder: "editorjs",
      data: props.existingContent || {},
      placeholder: "Напишите что-нибудь",
      onChange,
      autofocus: true,
      tools: {
        chatTool: {
          class: ChatTool,
        },
        dalleImage: {
          class: DalleImageTool,
        },
        header: {

          class: Header,
          config: {
            defaultLevel: 2,
            placeholder: "Заголовок",

          },
        },
        embed: {
          class: Embed,
          inlineToolbar: true,
          config: {
            services: {
              youtube: {
                regex:
                  /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/.\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&].*=.*)*)/,
                embedUrl: `https://www.youtube.com/embed/<%= remote_id %>`,
                html: `<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>`,
                height: 320,
                width: 580,
                id: ([id, params]) => {
                  if (!params && id) {
                    return id;
                  }

                  const paramsMap = {
                    start: "start",
                    end: "end",
                    t: "start",

                    time_continue: "start",
                    list: "list",
                  };

                  params = params
                    .slice(1)
                    .split("&")
                    .map((param) => {
                      const [name, value] = param.split("=");

                      if (!id && name === "v") {
                        id = value;

                        return null;
                      }

                      if (!paramsMap[name]) {
                        return null;
                      }

                      if (
                        value === "LL" ||
                        value.startsWith("RDMM") ||
                        value.startsWith("FL")
                      ) {
                        return null;
                      }

                      return `${paramsMap[name]}=${value}`;
                    })
                    .filter((param) => !!param);

                  return id + "?" + params.join("&");
                },
              },
            },
          },
        },
        image: {
          class: ImageTool,
          config: {
            actions: [],
            uploader: {
              async uploadByFile(file) {
                let answer = await uploadImage(file);
                console.log(answer);
                answer.file.url = `${runtimeConfig.apiBase}${answer.file.url}`;
                console.log(answer);
                return answer;
              },
            },
          },
        },
      },
      /**
       * Internationalzation config
       */
      i18n: {
        /**
         * @type {I18nDictionary}
         */
        messages: {
          /**
           * Other below: translation of different UI components of the editor.js core
           */
          ui: {
            blockTunes: {
              toggler: {
                "Click to tune": "Нажмите, чтобы настроить",
                "or drag to move": "или перетащите",
              },
            },
            inlineToolbar: {
              converter: {
                "Convert to": "Конвертировать в",
              },
            },
            toolbar: {
              toolbox: {
                Add: "Добавить",
              },
            },
          },

          /**
           * Section for translation Tool Names: both block and inline tools
           */
          toolNames: {
            Text: $t("paragraph"),
            Heading: $t("header"),
            List: "Список",
            Warning: "Примечание",
            Checklist: "Чеклист",
            Quote: "Цитата",
            Code: "Код",
            Delimiter: "Разделитель",
            "Raw HTML": "HTML-фрагмент",
            Table: "Таблица",
            Link: "Ссылка",
            Marker: "Маркер",
            Bold: "Полужирный",
            Italic: "Курсив",
            Image: $t("image"),
            InlineCode: "Моноширинный",
          },

          /**
           * Section for passing translations to the external tools classes
           */
          tools: {
            /**
             * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
             * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
             */
            warning: {
              // <-- 'Warning' tool will accept this dictionary section
              Title: "Название",
              Message: "Сообщение",
            },

            /**
             * Link is the internal Inline Tool
             */
            link: {
              "Add a link": "Вставьте ссылку",
            },
            /**
             * The "stub" is an internal block tool, used to fit blocks that does not have the corresponded plugin
             */
            stub: {
              "The block can not be displayed correctly.":
                "Блок не может быть отображен",
            },
          },

          /**
           * Section allows to translate Block Tunes
           */
          blockTunes: {
            /**
             * Each subsection is the i18n dictionary that will be passed to the corresponded Block Tune plugin
             * The name of a plugin should be equal the name you specify in the 'tunes' section for that plugin
             *
             * Also, there are few internal block tunes: "delete", "moveUp" and "moveDown"
             */
            delete: {
              Delete: "Удалить",
            },
            moveUp: {
              "Move up": "Переместить вверх",
            },
            moveDown: {
              "Move down": "Переместить вниз",
            },
          },
        },
      },
    });
    console.log(editor);
  }, 500);
});
onUnmounted(async () => {
  editor.destroy();
});
</script>
<template>
  <div class="relative overflow-visible">
    <div id="editorjs" class="text-base"></div>
  </div>
</template>

<!-- О боги tailwind-а, сжальтесь! Мы используем open source библиотеку, нам надо прописывать стили!-->
<style>
.image-tool__image-picture {
  width: 100%;
  object-fit: cover;
  max-height: 500px;
}
.codex-editor__redactor {
  padding-bottom: 50px !important;
}
.ce-toolbar__actions {
  right: -10px;
}
.ce-block__content {
  max-width: 100%;
  padding: 0px;
}
</style>
