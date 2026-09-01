import LazyImage from '../lazy-image';
import { PiBriefcase } from 'react-icons/pi';
import { ga, skeleton } from '../../utils';
import { WorkExperience } from '../../interfaces/work';

interface WorkExperienceProps {
  loading: boolean;
  workexperiences: WorkExperience[];
  googleAnalyticsId?: string;
}

const WorkExperienceCard = ({
  loading,
  workexperiences,
  googleAnalyticsId,
}: WorkExperienceProps) => {
  // Render Skeleton saat data sedang dimuat
  const renderSkeleton = () => {
    const array = [];
    const limit = 3;

    for (let index = 0; index < limit; index++) {
      array.push(
        <div className="card shadow-md card-sm bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0">
                <div className="w-24 h-24 mask mask-squircle">
                  {skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto md:mx-0',
                      })}
                    </h2>
                    {skeleton({
                      widthCls: 'w-24',
                      heightCls: 'h-3',
                      className: 'mx-auto md:mx-0',
                    })}
                    <div className="mt-3">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto md:mx-0',
                      })}
                    </div>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-4',
                        className: 'md:mr-2 mx-auto md:mx-0',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  // Render list Pengalaman Kerja
  const renderExperiences = () => {
    // Menggunakan workexperiences sesuai nama props
    return workexperiences && workexperiences.length ? (
      workexperiences.map((exp, index) => {
        const CardWrapper = exp.link ? 'a' : 'div';

        return (
          <CardWrapper
            className={`card shadow-md card-sm bg-base-100 ${
              exp.link ? 'cursor-pointer' : ''
            }`}
            key={index}
            href={exp.link}
            target={exp.link ? '_blank' : undefined}
            rel={exp.link ? 'noopener noreferrer' : undefined}
            onClick={() => {
              if (exp.link && googleAnalyticsId) {
                try {
                  ga.event('Click Work Experience', {
                    company: exp.company,
                    position: exp.position,
                  });
                } catch (error) {
                  console.error(error);
                }
              }
            }}
          >
            <div className="p-8 h-full w-full">
              <div className="flex items-center flex-col md:flex-row">
                <div className="avatar mb-5 md:mb-0 opacity-90">
                  <div className="w-24 h-24 mask mask-squircle">
                    <LazyImage
                      src={exp.logo || 'https://via.placeholder.com/150'}
                      alt={exp.company}
                      placeholder={skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-full',
                        shape: '',
                      })}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-start px-4">
                    <div className="text-center md:text-left w-full">
                      {/* Jabatan & Nama Perusahaan */}
                      <h2 className="font-bold text-base-content opacity-80 text-lg">
                        {exp.position}
                      </h2>
                      <h3 className="font-medium text-base-content opacity-60 text-sm">
                        {exp.company}
                      </h3>

                      {/* Periode Kerja (startDate - endDate / Present) */}
                      <p className="text-base-content opacity-50 text-xs mt-1">
                        {exp.startDate} - {exp.endDate || 'Present'}
                      </p>

                      {/* Deskripsi Pekerjaan */}
                      <p className="mt-3 text-base-content text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Tech Stack / Skills Badges */}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                          {exp.skills.map((skill, index2) => (
                            <div
                              className="py-1 px-3 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-70 text-base-content"
                              key={index2}
                            >
                              #{skill}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardWrapper>
        );
      })
    ) : (
      <div className="text-center mb-6">
        <PiBriefcase className="mx-auto h-12 w-12 opacity-30" />
        <p className="mt-1 text-sm opacity-50 text-base-content">
          Belum ada pengalaman kerja yang ditampilkan
        </p>
      </div>
    );
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center space-x-3">
              {loading ? (
                skeleton({
                  widthCls: 'w-12',
                  heightCls: 'h-12',
                  className: 'rounded-xl',
                })
              ) : (
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                  <PiBriefcase className="text-2xl text-primary" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-28', heightCls: 'h-8' })
                    : 'Pengalaman Kerja'}
                </h3>
                <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                    : 'Riwayat Karir & Profesional'}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {loading ? renderSkeleton() : renderExperiences()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
