import Image from "next/image";
import "../../src/utillity/utilities.css";
import "../../components/section-hero.css";
import "../../components/buttons.css";

export default function utilites() {
  return (
    <>
      <section className="home relative">
        <div className="bg-full absolute"></div>
        <div className="container mx-auto h-full">
          <div className="content flex flex-col justify-center items-center relative z-10 w-full h-full gap-12">
            <div className="content-text flex flex-col items-center gap-1">
              <span className="subtitle">Selamat Datang di</span>
              <h1 className="title">DEWANTARA</h1>
              <p className="desc-title">
                Jelajahi pintu gerbang menuju dunia yang dipenuhi keindahan dan
                pesona warisan nenek moyang kita.
              </p>
            </div>
            <a href="#" className="btn btn-primary">
              Jelajahi
            </a>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="content flex items-center justify-between gap-14">
            <div className="content-left">
              <div className="wrap-galery grid grid-cols-2 gap-4">
                <div className="img-galery"></div>
              </div>
            </div>
            <div className="content-right flex flex-col gap-10 items-start">
              <div className="content-text flex flex-col gap-4">
                <h2 className="title">Tentang Kami</h2>
                <p className="desc text-justify">
                  <span className="text-span">Dewantara</span> adalah situs web
                  yang didedikasikan untuk pelestarian dan edukasi seni wayang
                  Indonesia. Dewantara sendiri adalah singkatan dari “Demen
                  (‘suka’ dalam bahasa jawa) Wayang Nusantara” dan nama
                  Dewantara ini diambil dari salah satu tokoh pahlawan nasional,
                  yaitu Ki Hajar Dewantara yang dimana beliau adalah Bapak
                  Pendidikan Indonesia. Kami menyediakan berbagai informasi
                  seputar wayang, mulai dari sejarah, jenis-jenis wayang,
                  event-event wayang, hingga museum wayang yang ada di
                  Indonesia. Kami bangga mempersembahkan koleksi seni wayang
                  dari seluruh nusantara, dan inovasi terbaru kami memungkinkan
                  Anda untuk menggali lebih dalam melalui fitur scanner kami.
                </p>
              </div>
              <div className="btn btn-secondary drop-shadow-md">
                Baca Selengkapnya
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
