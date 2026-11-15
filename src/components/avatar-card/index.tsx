import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  avatarRing: boolean;
  resumeFileUrl?: string;
}

/**
 * Renders an AvatarCard component.
 * @param profile - The profile object.
 * @param loading - A boolean indicating if the profile is loading.
 * @param avatarRing - A boolean indicating if the avatar should have a ring.
 * @param resumeFileUrl - The URL of the resume file.
 * @returns JSX element representing the AvatarCard.
 */
const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  loading,
  avatarRing,
  resumeFileUrl,
}): React.JSX.Element => {
  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ${
                avatarRing
                  ? 'ring-3 ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              }`}
            >
              <LazyImage
                src="https://res.cloudinary.com/utjjtmte/image/upload/v1788321710/PAS_FOTO_IRFAN_MAULANA_KHAKIKI.jpg"
                alt={profile.name}
                className="w-full h-full object-cover object-[center_20%]"

                placeholder={skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-full',
                  shape: '',
                })}
              />
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            )}
          </h5>
          <div className="mt-4 text-justify text-sm text-base-content opacity-80 leading-relaxed space-y-3">
 <p>
  Saya adalah seorang Software Developer dan pengelola e-commerce dengan latar belakang S1 Sistem
  Informasi dan pengalaman hampir 3 tahun di bidang operasional bisnis digital.
  Saya memiliki ketertarikan pada pengembangan aplikasi web, otomasi data,
  serta pemanfaatan teknologi untuk mengubah proses operasional yang lambat dan rentan human error menjadi sistem
  otomatis yang tentunya lebih efisien dan akurat.
</p>
<p>
  Berbekal pengalaman menangani berbagai kebutuhan operasional e-commerce ( Shopify, Shopee, dan Lazada) mulai dari pengelolaan stok dan
  harga hingga sinkronisasi data ribuan produk,
  saya terbiasa mencari cara untuk mengatasi pekerjaan manual yang memakan
  waktu dan rentan terhadap kesalahan. Saya berupaya menerjemahkan berbagai
  permasalahan tersebut menjadi solusi berbasis teknologi yang lebih praktis,
  efisien, dan akurat. Saya juga terus mengembangkan kemampuan teknis melalui
  berbagai proyek dan eksplorasi teknologi baru, seperti melalui aplikasi otomasi audit data menggunakan Python
  dan Excel VBA Macro.
</p>

<p>
  Di bidang pengembangan software, saya telah membangun aplikasi web
  menggunakan Laravel, PHP, Vue 3, dan MySQL, termasuk platform undangan
  digital yang telah berjalan di server produksi serta CMS untuk institusi pendidikan.
  Saya juga memiliki pengalaman dalam perancangan database, integrasi
  payment gateway, troubleshooting, dan deployment menggunakan Docker.
</p>

<p>
  Kombinasi pengalaman teknis dan pemahaman terhadap proses bisnis membantu
  saya melihat sebuah permasalahan tidak hanya dari sisi kode, tetapi juga
  dari kebutuhan penggunanya. Saya senang membangun solusi yang praktis,
  mudah digunakan, dan dapat memberikan dampak nyata terhadap cara kerja
  sebuah sistem.
</p>
</div>
        </div>
        {resumeFileUrl &&
          (loading ? (
            <div className="mt-6">
              {skeleton({ widthCls: 'w-40', heightCls: 'h-8' })}
            </div>
          ) : (
            <a
              href={resumeFileUrl}
              target="_blank"
              className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
              download
              rel="noreferrer"
            >
              Download Resume
            </a>
          ))}
      </div>
    </div>
  );
};

export default AvatarCard;
