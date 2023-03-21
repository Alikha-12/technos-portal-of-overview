import Proud from "./image/proud.jpeg";
import Robot from "./image/Robotic.jpg";
function Idk() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-blue-500 p-8 md:p-12 lg:px-16 lg:py-24 lg:h-full md:h-1/3">
            <div className="mx-auto max-w-xl text-center align-middle">
              <h2 className="text-2xl font-bold text-white md:text-3xl lg:pt-20">
                Kickstart your journey now!
              </h2>
              <p className="hidden text-white/90 sm:mt-4 sm:block">
                With guide our students academically and spiritually. We make
                sure they unleashed their potential.
              </p>
              <div className="mt-4 md:mt-8">
                {/* Hover */}
                <a
                  className="group relative inline-block focus:outline-none focus:ring"
                  href="https://api.whatsapp.com/send/?phone=%2B6285733612072&text=%EF%BF%BD%D8%A7%DA%BE%D9%84%D8%A7+%D9%88+%D8%B3%DA%BE%D9%84%D8%A7%0A%0ASMP+Techno+Insan+Kamil+Tuban%0A%0A%EF%BF%BD+Cendekiawan+Muslim+Berbasis+Teknology+dan+Berbudaya+Lingkungan%0A%0A%EF%BF%BD+Silahkan+saget+ditulis+untuk+identitas+Ananda%3A%0A%EF%BF%BD+Nama+Calon+Santri+%3A%0A%EF%BF%BD+TTL+%3A%0A%EF%BF%BD+Asal+SD+%3A%0A%EF%BF%BD+Alamat+%3A%0A%EF%BF%BD+Nama+Orang+Tua+%3A%0A%EF%BF%BD+No.+Hp+Orang+Tua+%3A%0A%0A%EF%BF%BD+Persyaratan+yang+harus+dipenuhi%0A%EF%BF%BD+Formulir+pendaftaran+Rp250.000%2C00%0A%EF%BF%BD+FC+Akta+Kelahiran+2+lbr%0A%EF%BF%BD+FC+Kartu+Keluarga+2+lbr%0A%EF%BF%BD+FC+raport+SD+kelas+5+yang+telah+dilegalisir%0A%EF%BF%BD+Pas+Foto+3x4+berwarna+4+lbr%0A%EF%BF%BD+FC+KIP+%28Jika+punya%29%0A%0A%EF%BF%BD+Terimakasih&type=phone_number&app_absent=0"
                >
                  <span className="absolute inset-0 translate-x-0 translate-y-0 bg-white transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5" />
                  <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-blue-500">
                    ENROLL
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Student"
              src={Proud}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
            <img
              alt="Student"
              src={Robot}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Idk;
