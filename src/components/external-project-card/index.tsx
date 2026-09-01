import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { MdOpenInNew, MdOutlineArrowOutward } from 'react-icons/md';
import { PiCheckCircleFill, PiRocketLaunch } from 'react-icons/pi';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

// Interface diperluas agar mendukung fitur showcase yang kaya
interface ExtendedExternalProject extends SanitizedExternalProject {
  category?: string;
  period?: string;
  highlights?: string[];
  skills?: string[];
}

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: ExtendedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  // Render Skeleton saat data sedang dimuat
  const renderSkeleton = () => {
    const limit = externalProjects.length || 2;
    const array = [];

    for (let index = 0; index < limit; index++) {
      array.push(
        <div
          className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between"
          key={index}
        >
          {/* Skeleton Banner Gambar */}
          <div className="w-full h-44 bg-base-300">
            {skeleton({
              widthCls: 'w-full',
              heightCls: 'h-full',
              shape: '',
            })}
          </div>

          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              {/* Badge & Title */}
              <div className="flex justify-between items-center mb-3">
                {skeleton({ widthCls: 'w-24', heightCls: 'h-5' })}
                {skeleton({ widthCls: 'w-16', heightCls: 'h-4' })}
              </div>
              {skeleton({
                widthCls: 'w-3/4',
                heightCls: 'h-6',
                className: 'mb-3',
              })}

              {/* Deskripsi */}
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-4',
                className: 'mb-1.5',
              })}
              {skeleton({
                widthCls: 'w-5/6',
                heightCls: 'h-4',
                className: 'mb-4',
              })}

              {/* Highlights */}
              <div className="space-y-2 mb-4">
                {skeleton({ widthCls: 'w-full', heightCls: 'h-3' })}
                {skeleton({ widthCls: 'w-11/12', heightCls: 'h-3' })}
              </div>
            </div>

            {/* Badges & Button */}
            <div className="pt-4 border-t border-base-300/50">
              <div className="flex gap-2 mb-4">
                {skeleton({ widthCls: 'w-14', heightCls: 'h-5' })}
                {skeleton({ widthCls: 'w-14', heightCls: 'h-5' })}
                {skeleton({ widthCls: 'w-14', heightCls: 'h-5' })}
              </div>
              {skeleton({ widthCls: 'w-full', heightCls: 'h-9' })}
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  // Render list Proyek Unggulan
  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => {
      const handleAnalytics = () => {
        try {
          if (googleAnalyticId) {
            ga.event('Click External Project', {
              post: item.title,
            });
          }
        } catch (error) {
          console.error(error);
        }
      };

      return (
        <div
          key={index}
          className="group card bg-base-100 border border-base-300/80 hover:border-primary/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          {/* 1. Header Media / Project Thumbnail */}
          {item.imageUrl && (
            <div className="relative w-full h-48 bg-base-300 overflow-hidden">
              <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
                <LazyImage
                  src={item.imageUrl}
                  alt={item.title}
                  placeholder={skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                />
              </div>
              {/* Overlay Kategori & Periode */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                {item.category && (
                  <span className="backdrop-blur-md bg-base-100/85 text-base-content border border-base-300/50 text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full shadow-sm">
                    {item.category}
                  </span>
                )}
                {item.period && (
                  <span className="backdrop-blur-md bg-neutral/80 text-neutral-content text-[11px] font-medium px-2 py-0.5 rounded-md shadow-sm ml-auto">
                    {item.period}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* 2. Konten Informasi Proyek */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              {/* Judul Proyek */}
              <h4 className="text-lg font-bold text-base-content group-hover:text-primary transition-colors flex items-center gap-1.5">
                <span>{item.title}</span>
              </h4>

              {/* Ringkasan Proyek */}
              <p className="mt-2 text-xs sm:text-sm text-base-content/75 leading-relaxed text-left">
                {item.description}
              </p>

              {/* Poin Pencapaian / Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-4 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/50 block">
                    Key Contributions
                  </span>
                  <ul className="space-y-1.5">
                    {item.highlights.map((point, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-xs text-base-content/80 flex items-start gap-2 leading-tight"
                      >
                        <PiCheckCircleFill className="text-primary text-sm flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 3. Tech Stack & Tombol Aksi */}
            <div className="mt-6 pt-4 border-t border-base-300/60">
              {/* Badges Keahlian / Tools */}
              {item.skills && item.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-base-200 text-base-content/80 border border-base-300"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Link Button */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleAnalytics}
                  className="btn btn-primary btn-sm w-full gap-2 font-semibold shadow-sm hover:shadow group/btn"
                >
                  <span>Kunjungi Website</span>
                  <MdOutlineArrowOutward className="text-base group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card bg-base-200 shadow-xl border border-base-300">
          <div className="card-body p-6 sm:p-8">
            {/* Header Bagian Proyek */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center space-x-3">
                {loading ? (
                  skeleton({
                    widthCls: 'w-12',
                    heightCls: 'h-12',
                    className: 'rounded-xl',
                  })
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <PiRocketLaunch className="text-2xl text-primary" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                      : header}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-0.5 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : `Menampilkan ${externalProjects.length} proyek pilihan`}
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Kartu Proyek */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? renderSkeleton() : renderExternalProjects()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;