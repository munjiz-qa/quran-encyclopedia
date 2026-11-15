/* انتقلت الموسوعة إلى https://quran-encyclopedia.github.io/ : هذا العامل يمسح تخزين النسخة القديمة ويلغي تسجيل نفسه */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  const cs = await self.clients.matchAll({ type: 'window' });
  cs.forEach(c => c.navigate('https://quran-encyclopedia.github.io/').catch(() => {}));
})()));
