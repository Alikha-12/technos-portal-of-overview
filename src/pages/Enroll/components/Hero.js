import EC from "./image/Classroom.jpeg";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${EC})`,
      }}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25" />
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Choose wisely
            <strong className="block font-extrabold text-[#0e82bd]">
              Choose us.
            </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            We'll guide them trought their spiritual and journey to make the
            most of themselves.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B6285733612072&text=%EF%BF%BD%D8%A7%DA%BE%D9%84%D8%A7+%D9%88+%D8%B3%DA%BE%D9%84%D8%A7%0A%0ASMP+Techno+Insan+Kamil+Tuban%0A%0A%EF%BF%BD+Cendekiawan+Muslim+Berbasis+Teknology+dan+Berbudaya+Lingkungan%0A%0A%EF%BF%BD+Silahkan+saget+ditulis+untuk+identitas+Ananda%3A%0A%EF%BF%BD+Nama+Calon+Santri+%3A%0A%EF%BF%BD+TTL+%3A%0A%EF%BF%BD+Asal+SD+%3A%0A%EF%BF%BD+Alamat+%3A%0A%EF%BF%BD+Nama+Orang+Tua+%3A%0A%EF%BF%BD+No.+Hp+Orang+Tua+%3A%0A%0A%EF%BF%BD+Persyaratan+yang+harus+dipenuhi%0A%EF%BF%BD+Formulir+pendaftaran+Rp250.000%2C00%0A%EF%BF%BD+FC+Akta+Kelahiran+2+lbr%0A%EF%BF%BD+FC+Kartu+Keluarga+2+lbr%0A%EF%BF%BD+FC+raport+SD+kelas+5+yang+telah+dilegalisir%0A%EF%BF%BD+Pas+Foto+3x4+berwarna+4+lbr%0A%EF%BF%BD+FC+KIP+%28Jika+punya%29%0A%0A%EF%BF%BD+Terimakasih&type=phone_number&app_absent=0"
              className="block w-full rounded bg-[#0e82bd] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#A6ADBB] focus:outline-none focus:ring active:bg-[#A6ADBB] sm:w-auto"
            >
              Talk with us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
