import { UserSearch, Users, Briefcase, HeadphonesIcon } from "lucide-react";
import teamImage from "@/assets/team-recruitment.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const TeamSection = () => {
  const { t, isRTL } = useLanguage();

  const teamHighlights = [
    { icon: UserSearch, titleKey: "team.recruitment.title", descKey: "team.recruitment.desc" },
    { icon: Users, titleKey: "team.hr.title", descKey: "team.hr.desc" },
    { icon: Briefcase, titleKey: "team.operations.title", descKey: "team.operations.desc" },
    { icon: HeadphonesIcon, titleKey: "team.support.title", descKey: "team.support.desc" },
  ];

  return (
    <section id="team" className="section-padding bg-muted/30">
      <div className="container-section">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? "" : ""}`}>
          {/* Image */}
          <div className={`relative ${isRTL ? "lg:order-2" : "order-2 lg:order-1"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={teamImage}
                alt={isRTL ? "فريق توظيف ZIMS المحترف" : "ZIMS professional recruitment and HR team"}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
            </div>
            {/* Experience Badge */}
            <div className={`absolute -bottom-6 ${isRTL ? "-right-6" : "-left-6"} bg-accent rounded-xl shadow-lg p-6`}>
              <p className="font-display text-3xl font-bold text-navy-dark">{t("team.badge.title")}</p>
              <p className="text-navy-dark/80 text-sm">{t("team.badge.subtitle")}</p>
            </div>
          </div>

          {/* Content */}
          <div className={`${isRTL ? "lg:order-1 text-right" : "order-1 lg:order-2"}`}>
            <span className={`inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4`}>
              {t("team.badge")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("team.title1")} <span className="text-gradient-gold">{t("team.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t("team.description")}
            </p>

            {/* Team Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.titleKey} className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-1">{t(item.titleKey)}</h4>
                      <p className="text-muted-foreground text-sm">{t(item.descKey)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
