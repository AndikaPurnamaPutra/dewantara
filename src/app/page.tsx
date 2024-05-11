import Image from "next/image";

export default function utilites() {
  return (
    <section className="section-home">
      <div className="container">
        <div className="content flex flex-col items-center gap-12">
          <div className="content-text flex flex-col items-center gap-1">
            <span className="subtitle">Selamat Datang di</span>
            <h1 className="title">DEWANTARA</h1>
            <p className="desc">
              Jelajahi pintu gerbang menuju dunia yang dipenuhi keindahan dan
              pesona warisan nenek moyang kita.
            </p>
          </div>
          <a href="#" className="btn btn-primary">
            Jelajah
          </a>
        </div>
      </div>
    </section>
  );
}
