console.log('test');
console.log('this', this);
console.log('globalThis', globalThis);
console.log('currentScript', document.currentScript);
console.log('import meta', import.meta);
console.log(new URL(import.meta.url).searchParams.get("test"));
