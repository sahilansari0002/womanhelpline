import { useTranslation } from "react-i18next";

interface WhoWeHelpProps {
  isDarkMode: boolean;
}

export function WhoWeHelp({ isDarkMode }: WhoWeHelpProps) {
  const { t } = useTranslation();

  const groups = [
    { icon: "👧", key: "girls", color: "from-pink-400 to-rose-500" },
    { icon: "👩", key: "youngWomen", color: "from-purple-400 to-pink-500" },
    { icon: "👰", key: "marriedWomen", color: "from-rose-400 to-purple-500" },
    { icon: "💔", key: "divorcedWomen", color: "from-indigo-400 to-purple-500" },
    { icon: "👵", key: "elderWomen", color: "from-purple-400 to-indigo-500" }
  ];

  const pillars = [
    { icon: "💪", key: "strength" },
    { icon: "🛡️", key: "protection" },
    { icon: "❤️", key: "care" },
    { icon: "⚖️", key: "justice" }
  ];

  return (
    <section
      className={`py-20 ${
        isDarkMode
          ? "bg-gradient-to-br from-indigo-900 to-purple-800"
          : "bg-gradient-to-br from-rose-50 to-purple-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-8 ${
              isDarkMode
                ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-purple-300"
                : "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600"
            }`}
          >
            {t("whoWeHelp.title")}
          </h2>

          <div
            className={`w-20 h-1 rounded-full mx-auto mb-8 ${
              isDarkMode
                ? "bg-gradient-to-r from-rose-400 to-purple-400"
                : "bg-gradient-to-r from-rose-500 to-purple-500"
            }`}
          />

          <p
            className={`text-2xl font-medium mb-4 ${
              isDarkMode ? "text-yellow-300" : "text-purple-600"
            }`}
          >
            “{t("whoWeHelp.quote")}”
          </p>

          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-purple-200" : "text-gray-700"
            }`}
          >
            {t("whoWeHelp.subtitle")}
          </p>
        </div>

        {/* GROUPS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {groups.map((group, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl backdrop-blur-md transition-all duration-500 hover:scale-105 ${
                isDarkMode
                  ? "bg-white/10 border border-purple-400/30 hover:bg-white/15"
                  : "bg-white/80 border border-rose-200/50 hover:bg-white/90"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
              />

              <div
                className={`w-20 h-20 mb-6 rounded-3xl bg-gradient-to-r ${group.color} flex items-center justify-center shadow-lg`}
              >
                <span className="text-3xl">{group.icon}</span>
              </div>

              <h3
                className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {t(`whoWeHelp.groups.${group.key}.title`)}
              </h3>

              <p
                className={`text-sm font-medium mb-4 ${
                  isDarkMode ? "text-rose-300" : "text-rose-600"
                }`}
              >
                {t(`whoWeHelp.groups.${group.key}.age`)}
              </p>

              <p
                className={`text-base leading-relaxed ${
                  isDarkMode ? "text-purple-200" : "text-gray-600"
                }`}
              >
                {t(`whoWeHelp.groups.${group.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* BEYOND SECTION */}
        <div
          className={`text-center p-12 rounded-3xl backdrop-blur-md ${
            isDarkMode
              ? "bg-white/10 border border-purple-400/30"
              : "bg-white/80 border border-rose-200/50"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🤝</span>
            </div>

            <h3
              className={`text-3xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {t("whoWeHelp.beyondTitle")}
            </h3>

            <p
              className={`text-xl leading-relaxed mb-8 ${
                isDarkMode ? "text-purple-200" : "text-gray-700"
              }`}
            >
              {t("whoWeHelp.beyondText")}
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{pillar.icon}</div>
                  <p
                    className={`font-semibold ${
                      isDarkMode ? "text-purple-200" : "text-gray-700"
                    }`}
                  >
                    {t(`whoWeHelp.pillars.${pillar.key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
