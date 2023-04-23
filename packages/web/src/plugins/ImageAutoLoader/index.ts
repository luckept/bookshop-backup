import { ImageCollector } from "@/plugins/ImageAutoLoader/ImageCollector";

export function ImageAutoLoader(storageNamespace?: string) {
  return {
    install() {
      ImageCollector.collectAllImages(storageNamespace);
    },
  };
}
