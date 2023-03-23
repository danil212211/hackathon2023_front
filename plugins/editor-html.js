import edjsHTML from "editorjs-html";
const edjsParser = edjsHTML();
function parseChatGPT(block) {
  return `<div>${block.data.text}</div>`;
}
function parseDallE(block) {
  return `<img  src="${block.data.url}"/>`;
}
export default defineNuxtPlugin(() => {
  const edjsParser = edjsHTML({
    chatTool: parseChatGPT,
    dalleImage: parseDallE,
  });
  console.log(edjsParser);
  return {
    provide: {
      editorhtml: () => edjsParser,
    },
  };
});
