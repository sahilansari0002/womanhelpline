import { useTranslation } from "react-i18next";

interface AboutProps {
  isDarkMode: boolean;
}

export function About({ isDarkMode }: AboutProps) {
  const { t } = useTranslation();

  const missionItems = [
    { icon: "🛡️", key: "protection" },
    { icon: "⚖️", key: "legal" },
    { icon: "💝", key: "marriage" },
    { icon: "🤝", key: "counseling" },
    { icon: "🌍", key: "empowerment" }
  ];

  return (
    <section
      id="about"
      className={`py-20 ${
        isDarkMode
          ? "bg-gradient-to-br from-purple-800 to-indigo-800"
          : "bg-gradient-to-br from-white to-rose-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                isDarkMode
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-purple-300"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600"
              }`}
            >
              {t("about.title")}
            </h2>

            <div
              className={`w-20 h-1 rounded-full ${
                isDarkMode
                  ? "bg-gradient-to-r from-rose-400 to-purple-400"
                  : "bg-gradient-to-r from-rose-500 to-purple-500"
              }`}
            />

            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-purple-100" : "text-gray-700"
              }`}
            >
              {t("about.description1")}{" "}
              <span
                className={`font-semibold ${
                  isDarkMode ? "text-rose-300" : "text-rose-600"
                }`}
              >
                {t("about.organization")}
              </span>
              . {t("about.description2")}
            </p>

            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-purple-100" : "text-gray-700"
              }`}
            >
              {t("about.description3")}{" "}
              <span
                className={`font-bold ${
                  isDarkMode ? "text-yellow-300" : "text-purple-600"
                }`}
              >
                {t("about.ageBarrier")}
              </span>
            </p>

            {/* MISSION */}
            <div className="space-y-4 mt-8">
              {missionItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isDarkMode
                        ? "bg-purple-700/50 border border-purple-500/30"
                        : "bg-rose-100 border border-rose-200"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <p
                    className={`text-lg ${
                      isDarkMode ? "text-purple-200" : "text-gray-700"
                    }`}
                  >
                    {t(`about.mission.${item.key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div
              className={`relative p-8 rounded-3xl backdrop-blur-md shadow-2xl ${
                isDarkMode
                  ? "bg-white/10 border border-purple-400/30"
                  : "bg-white/80 border border-rose-200/50"
              }`}
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />

              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-rose-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl">🌸</span>
                </div>

                <h3
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {t("about.vision")}
                </h3>

                <p
                  className={`text-lg leading-relaxed ${
                    isDarkMode ? "text-purple-200" : "text-gray-600"
                  }`}
                >
                  {t("about.visionText")}
                </p>

                {/* STATS */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div
                      className={`text-3xl font-bold ${
                        isDarkMode ? "text-rose-300" : "text-rose-600"
                      }`}
                    >
                      2000+
                    </div>
                    <div
                      className={`text-sm ${
                        isDarkMode ? "text-purple-200" : "text-gray-600"
                      }`}
                    >
                      {t("about.womenHelped")}
                    </div>
                  </div>

                  <div className="text-center">
                    <div
                      className={`text-3xl font-bold ${
                        isDarkMode ? "text-purple-300" : "text-purple-600"
                      }`}
                    >
                      15+
                    </div>
                    <div
                      className={`text-sm ${
                        isDarkMode ? "text-purple-200" : "text-gray-600"
                      }`}
                    >
                      {t("about.statesCovered")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
