export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Kegiatan Pramuka</h1>
      <p>
        Selain aktif di dunia coding, saya juga mengikuti kegiatan <b>Pramuka</b>.
        Pramuka mengajarkan saya tentang kemandirian, kerjasama, kepemimpinan,
        serta cinta tanah air.
      </p>
      <p className="mt-4">
        Beberapa kegiatan Pramuka yang saya ikuti antara lain:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-2">
        <li>Latihan rutin baris-berbaris & tali-temali</li>
        <li>Jelajah alam & perkemahan</li>
        <li>Bakti sosial untuk masyarakat</li>
        <li>Lomba-lomba antar regu</li>
      </ul>
      <p className="mt-6 font-semibold">
        Motto Pramuka: "Satyaku Kudarmakan, Darmaku Kubaktikan"
      </p>
    </section>
  );
}