import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Dwiky Darmawan",
      role: "Customer",
      quote: "Awal ke sini tahu dari google maps. Bengkel spesialis kelistrikan tapi juga melayani hal-hal lain yang ruwet dan tidak diatasi bengkel lain. Di bengkel ini saya memperbaiki paddle shift crv yang mati, penggantian ect, sensor O2, dan memperbaiki indikator eps dan traction yang menyala. Soal biaya nanti diberikan di awal rinciannya. Pengerjaan diberikan garansi kalau permasalahan mobil masih timbul tenggelam.",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWcrB5sn1hfJSA9Zl8gEmOzBCBX4ssl2d6E4E19qIZsWi7-82F7=w144-h144-p-rp-mo-ba4-br100"
    },
    {
      name: "Leen Lin",
      role: "Customer",
      quote: "Kmrn ke bengkel ini utk benerin power window yg smpt konslet, dilayani dgn sangat baik dan cepat. Bahkan owner turun tangan sendiri, owner super ramah. Dijelaskan dgn baik, dan kerusakan ditangani walau tanpa ganti part, jd bisa hemat. Super recommended bt yg mau servis di sini. Terima kasih bnyk dan sukses terus bt owner and all crew.",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocKitEVhpDP1LzEEx6YD2eHqKgCuwbZE-enxnLlEWFxepj_T0g=w144-h144-p-rp-mo-br100"
    },
    {
      name: "Johan Firdianto",
      role: "Customer",
      quote: "Tahu dari sini dari orang bengkel kawi. Orangnya ramah dan supel. Mobil kami kijang krista tahun 2000, ampere bensin rusak, dikemudian diberitahu sama orangnya komponen yang rusaknya, ditawarkan mau cari sendiri atau dicarikan orangnya. Akhirnya sama sama cari,dan dikasih tahu tempat beli spare partnya, karena beliau gak ready stock. Akhirnya setelah saya beli, dipasang sama orang bengkel ini. Harganya terjangkau. Bengkel auto2000 sdh angkat tangan mau benerin.",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUCOrhmt9UmMjXCc7Ax_MTon6bomRnhOZI6zUjIgidmpdcE77Yg=w144-h144-p-rp-mo-ba2-br100"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;