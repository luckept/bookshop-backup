export const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";

export const isNode =
  typeof process !== "undefined" && process.versions != null && process.versions.node != null;

export const isWebWorker =
  typeof self === "object" &&
  self.constructor &&
  self.constructor.name === "DedicatedWorkerGlobalScope";

export const isJsDom =
  (typeof window !== "undefined" && window.name === "nodejs") ||
  (typeof navigator !== "undefined" &&
    (navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")));
