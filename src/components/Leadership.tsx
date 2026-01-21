import { useTranslation } from "react-i18next";

interface LeadershipProps {
  isDarkMode: boolean;
}

export function Leadership({ isDarkMode }: LeadershipProps) {
  const { t } = useTranslation();

  const qualities = [
    { icon: "💪", key: "empowerment" },
    { icon: "⚖️", key: "justice" },
    { icon: "❤️", key: "compassion" }
  ];

  return (
    <section
      className={`py-20 relative ${
        isDarkMode
          ? "bg-gradient-to-br from-indigo-900 to-purple-900"
          : "bg-gradient-to-br from-purple-50 to-pink-50"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2
          className={`text-4xl md:text-5xl font-bold mb-8 ${
            isDarkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-purple-300"
              : "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600"
          }`}
        >
          {t("leadership.title")}
        </h2>

        <div
          className={`w-20 h-1 rounded-full mx-auto mb-12 ${
            isDarkMode
              ? "bg-gradient-to-r from-rose-400 to-purple-400"
              : "bg-gradient-to-r from-rose-500 to-purple-500"
          }`}
        />

        {/* CARD */}
        <div
          className={`relative p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl max-w-2xl mx-auto ${
            isDarkMode
              ? "bg-white/10 border border-purple-400/30"
              : "bg-white/80 border border-rose-200/50"
          }`}
        >
          {/* Crown */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">👑</span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
            <img
              src="/farha.jpeg"
              alt={t("leadership.name")}
              className="w-full h-full object-cover"
            />
          </div>

          {/* NAME */}
          <h3
            className={`text-3xl font-bold mb-2 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {t("leadership.name")}
          </h3>

          {/* ROLE */}
          <p
            className={`text-xl mb-6 ${
              isDarkMode ? "text-rose-300" : "text-rose-600"
            }`}
          >
            {t("leadership.role")}
          </p>

          {/* DESCRIPTION */}
          <p
            className={`text-lg leading-relaxed mb-8 ${
              isDarkMode ? "text-purple-200" : "text-gray-700"
            }`}
          >
            {t("leadership.description")}
          </p>

          {/* QUALITIES */}
          <div className="grid md:grid-cols-3 gap-4">
            {qualities.map((q, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl ${
                  isDarkMode
                    ? "bg-purple-800/30 border border-purple-600/20"
                    : "bg-rose-50 border border-rose-200/50"
                }`}
              >
                <div className="text-2xl mb-2">{q.icon}</div>
                <h4
                  className={`font-semibold mb-1 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {t(`leadership.qualities.${q.key}.title`)}
                </h4>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-purple-200" : "text-gray-600"
                  }`}
                >
                  {t(`leadership.qualities.${q.key}.desc`)}
                </p>
              </div>
            ))}
          </div>

          {/* QUOTE */}
          <div
            className={`mt-8 p-6 rounded-xl ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-800/50 to-indigo-800/50 border border-purple-500/30"
                : "bg-gradient-to-r from-rose-100 to-purple-100 border border-rose-200"
            }`}
          >
            <p
              className={`text-lg font-medium italic ${
                isDarkMode ? "text-purple-100" : "text-gray-700"
              }`}
            >
              “{t("leadership.quote")}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
