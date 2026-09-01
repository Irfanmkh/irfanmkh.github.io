import { RiDice4Line } from 'react-icons/ri';
import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import { LOCAL_STORAGE_KEY_NAME } from '../../constants';
import { skeleton } from '../../utils';
import { MouseEvent, useState, useEffect } from 'react';

/**
 * Renders a theme changer component.
 */
const ThemeChanger = ({
  theme,
  setTheme,
  loading,
  themeConfig,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
}) => {
  const [currentDateTime, setCurrentDateTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDateTime(new Date());

    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const changeTheme = (
    e: MouseEvent<HTMLAnchorElement>,
    selectedTheme: string,
  ) => {
    e.preventDefault();

    document.querySelector('html')?.setAttribute('data-theme', selectedTheme);

    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY_NAME, selectedTheme);
    }

    setTheme(selectedTheme);
  };

  const formattedDateTime = currentDateTime
    ? `${currentDateTime.toLocaleDateString('id-ID', {
        dateStyle: 'medium',
      })}, ${currentDateTime
        .toLocaleTimeString('id-ID', {
          timeStyle: 'medium',
        })
        .replace(/\./g, ':')}`
    : '';

  return (
    <div className="card overflow-visible shadow-lg card-sm bg-base-100">
      {/* Mengubah padding agar muat untuk 3 bagian */}
      <div className="flex-row items-center justify-between flex px-6 py-4">
        {/* 1. Kiri: Teks Theme */}
        <div className="flex-1">
          <h5 className="card-title">
            {loading ? (
              skeleton({
                widthCls: 'w-20',
                heightCls: 'h-8',
                className: 'mb-1',
              })
            ) : (
              <span className="text-base-content opacity-70">Theme</span>
            )}
          </h5>
          <span className="text-base-content/50 capitalize text-sm block">
            {loading
              ? skeleton({ widthCls: 'w-16', heightCls: 'h-5' })
              : theme === themeConfig.defaultTheme
                ? 'Default'
                : theme}
          </span>
        </div>

        {/* 2. Tengah: Jam / Datetime (Rata Tengah) */}
        <div className="flex-1 text-center px-2">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-base-content/70 block tabular-nums">
            {loading
              ? skeleton({
                  widthCls: 'w-36',
                  heightCls: 'h-4',
                  className: 'mx-auto',
                })
              : formattedDateTime}
          </span>
        </div>

        {/* 3. Kanan: Button Tema */}
        <div className="flex-1 flex justify-end">
          {loading ? (
            skeleton({
              widthCls: 'w-12',
              heightCls: 'h-10',
            })
          ) : (
            <div title="Change Theme" className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="btn btn-ghost m-1 normal-case opacity-50 text-base-content flex items-center whitespace-nowrap"
              >
                <RiDice4Line className="inline-block w-5 h-5 stroke-current" />
              </div>
              <div
                tabIndex={0}
                className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content max-h-96 min-w-max rounded-lg bg-base-200 text-base-content z-10"
              >
                <ul className="p-4 menu menu-sm">
                  {[
                    themeConfig.defaultTheme,
                    ...themeConfig.themes.filter(
                      (item) => item !== themeConfig.defaultTheme,
                    ),
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        onClick={(e) => changeTheme(e, item)}
                        className={`${theme === item ? 'active' : ''}`}
                      >
                        <span className="opacity-60 capitalize">
                          {item === themeConfig.defaultTheme ? 'Default' : item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;
