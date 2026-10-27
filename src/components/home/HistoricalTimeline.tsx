import React from "react";
import Image from "next/image";
import FlagEdge from "@/components/ui/FlagEdge";

interface TimelineEvent {
  period: string;
  title: string;
  text: string;
  type: "normal" | "turning-point" | "promulgation";
  tag: string;
  image: string;
  imageAlt: string;
  isReferendum?: boolean;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    period: "1920s to 1963",
    title: "Colonial Legacy and Independence Compromise",
    text: "British colonial rule utilized a divide and rule strategy that marginalized various communities. During negotiations for the 1963 Independence Constitution at Lancaster House, smaller ethnic communities feared domination by larger groups. The British brokered a compromise that included a bicameral parliament and regionalism to diffuse power. Kenya gained independence in 1963.",
    type: "normal",
    tag: "Lancaster House",
    image: "/assets/images/1.jpg",
    imageAlt: "British colonial administration in Kenya, early 20th century",
  },
  {
    period: "1964 to 1989",
    title: "The Rise of the Imperial Presidency",
    text: "The ruling elite viewed regionalism as a threat to national unity and state resources. A series of rapid amendments dismantled the regional assemblies and abolished the Senate in 1968. The roles of Head of State and Government were merged. In 1982, a constitutional amendment officially made Kenya a de jure one party state. The government suppressed political dissent, independent courts, and civil society.",
    type: "normal",
    tag: "One-Party Era",
    image: "/assets/images/2.jpg",
    imageAlt: "Kenyan government official ceremony during the single-party era, 1970s",
  },
  {
    period: "1990 to 1997",
    title: "The Second Liberation",
    text: "The fall of the Berlin Wall shifted global geopolitics, and international donors tied economic aid to democratic reforms. A coalition of clergy, lawyers, academics, and veteran politicians launched the Saba Saba movement. Facing domestic riots and the suspension of foreign aid, the government repealed Section 2A in 1991 to allow multi party politics. Parliament later passed the Constitution of Kenya Review Commission Act in 1997.",
    type: "turning-point",
    tag: "Section 2A Repeal",
    image: "/assets/images/3.jpg",
    imageAlt: "Citizens marching for democratic reform during Kenya's second liberation, early 1990s",
  },
  {
    period: "1998 to 2004",
    title: "Civil Society Push and the Bomas Draft",
    text: "Civil society organizations, religious groups, and citizens demanded a citizen led constitutional review. The National Constitutional Conference convened at the Bomas of Kenya auditorium in Nairobi in 2003. This representative assembly produced the Bomas Draft in 2004, focusing on devolution and clipping executive power to prevent dictatorship.",
    type: "normal",
    tag: "Bomas Conference",
    image: "/assets/images/4.jpg",
    imageAlt: "Delegates at the National Constitutional Conference at the Bomas of Kenya, Nairobi, 2003",
  },
  {
    period: "2005",
    title: "Political Betrayal and the First Referendum",
    text: "The government altered the Bomas Draft to create the Wako Draft, retaining a powerful central presidency. The 2005 referendum became a proxy political war. Kenyans overwhelmingly rejected the Wako Draft.",
    type: "normal",
    tag: "Wako Draft Rejected",
    image: "/assets/images/5.jpg",
    imageAlt: "Kenyan voters at a polling station during the 2005 constitutional referendum",
  },
  {
    period: "2007 to 2010",
    title: "The Breaking Point and National Survival",
    text: "The failure to enact a new constitution left the centralized presidential system intact for the 2007 general elections. Disputed election results triggered post election violence that left over 1,000 dead and hundreds of thousands displaced. The 2008 National Accord mandated comprehensive constitutional reform to address historical grievances. Parliament established a Committee of Experts in 2008 to harmonize previous drafts.",
    type: "normal",
    tag: "National Accord",
    image: "/assets/images/6.jpg",
    imageAlt: "Aftermath of the 2007 to 2008 post-election violence crisis in Kenya",
  },
  {
    period: "2010",
    title: "The 2010 Referendum Campaigns",
    text: "The new draft constitution faced a national referendum in August 2010 with two primary factions. The Green or Yes Camp secured 68.6% of the national vote. President Mwai Kibaki and Prime Minister Raila Odinga united to lead the campaign in favor of the new constitution. Vice President Kalonzo Musyoka and Water Minister Charity Ngilu campaigned for the Yes vote in the lower Eastern Province. The Red or No Camp garnered 31.4% of the national vote. Higher Education Minister William Ruto served as the primary political spokesman and leader of the No campaign, successfully rallying the Rift Valley Province against the proposed constitution. A coalition of Christian clergy formed a massive bloc within the No camp, campaigning against the draft because it enshrined Kadhi courts into the Constitution.",
    type: "turning-point",
    tag: "National Referendum",
    image: "/assets/images/7.jpg",
    imageAlt: "Kenyans at a public rally during the 2010 constitutional referendum campaign",
    isReferendum: true,
  },
  {
    period: "August 27, 2010",
    title: "Promulgation",
    text: "President Mwai Kibaki formally promulgated the new Constitution at Uhuru Park in Nairobi. The document officially cements this legacy by HONOURING those who heroically struggled to bring freedom and justice to our land and acknowledging that the Kenyan people participated fully in the making of this Constitution.",
    type: "promulgation",
    tag: "Uhuru Park Promulgation",
    image: "/assets/images/8.webp",
    imageAlt: "Jubilant crowds at Uhuru Park, Nairobi celebrating the promulgation of the 2010 Constitution of Kenya",
  },
];

export default function HistoricalTimeline() {
  return (
    <section className="py-20 sm:py-24 bg-white" id="timeline">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-katiba-green-light border border-katiba-green/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-katiba-green" />
            <span className="text-xs font-black uppercase tracking-wider text-katiba-green font-sans">
              Historical Trajectory
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-katiba-black tracking-tight leading-tight font-sans">
            The Long March to The 2010 Katiba
          </h2>
          <p className="font-serif text-katiba-gray-600 text-base sm:text-lg mt-3 leading-relaxed">
            From colonial marginalization and imperial centralization to citizen defiance and formal promulgation at Uhuru Park.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Spine — hidden on mobile, shown from lg */}
          <div className="absolute left-[7px] lg:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-katiba-gray-300 hidden lg:block" />
          {/* Mobile spine */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-katiba-gray-300 lg:hidden" />

          <div className="space-y-10 lg:space-y-16">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;

              const markerClasses = {
                normal: "bg-white border-2 border-katiba-black",
                "turning-point": "bg-katiba-red border-2 border-katiba-red",
                promulgation: "bg-katiba-green border-2 border-katiba-green",
              }[event.type];

              const categoryForEdge =
                event.type === "promulgation"
                  ? "Governance"
                  : event.type === "turning-point"
                    ? "Rights and Freedoms"
                    : "default";

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-start ${isEven ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* ── CONTENT CARD ── */}
                  <div className="w-full lg:w-[calc(50%-36px)] pl-8 sm:pl-10 lg:pl-0">
                    <div className="relative bg-white border border-katiba-gray-200 hover:border-katiba-black rounded-2xl shadow-sm transition-colors overflow-hidden">
                      <FlagEdge category={categoryForEdge} orientation="top" thickness={6} />

                      {/* Image: full-width inside the card, sits right below the flag edge */}
                      <div className="relative w-full h-44 sm:h-52 overflow-hidden bg-katiba-gray-100">
                        <Image
                          src={event.image}
                          alt={event.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                        />
                        {/* Period badge overlay on the image */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-6 pb-3 flex items-end justify-between">
                          <span className="font-sans font-black text-xl sm:text-2xl text-white leading-none drop-shadow">
                            {event.period}
                          </span>
                          <span className="font-sans text-[11px] font-bold text-white bg-black/50 border border-white/20 px-2.5 py-1 rounded uppercase tracking-wide backdrop-blur-sm">
                            {event.tag}
                          </span>
                        </div>
                      </div>

                      {/* Text body */}
                      <div className="p-5 sm:p-6">
                        <h3 className="font-sans font-bold text-lg sm:text-[20px] text-katiba-black leading-snug mb-3">
                          {event.title}
                        </h3>

                        <p className="font-serif text-[16px] sm:text-[17px] text-katiba-gray-800 leading-[1.65]">
                          {event.text}
                        </p>

                        {/* Referendum Results Bar */}
                        {event.isReferendum && (
                          <div className="mt-5 pt-4 border-t border-katiba-gray-100 space-y-2">
                            <div className="flex items-center text-xs font-sans font-bold text-katiba-gray-600 mb-1 uppercase tracking-wide">
                              <span>Referendum Results:</span>
                            </div>
                            <div className="space-y-1.5">
                              <div className="flex items-center">
                                <div
                                  style={{ width: "68.6%" }}
                                  className="bg-katiba-green text-white font-sans font-bold text-xs py-2 px-3.5 flex items-center justify-between rounded-lg shadow-sm"
                                >
                                  <span>Yes Camp</span>
                                  <span>68.6%</span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div
                                  style={{ width: "31.4%" }}
                                  className="bg-katiba-black text-white font-sans font-bold text-xs py-2 px-3.5 flex items-center justify-between rounded-lg shadow-sm"
                                >
                                  <span>No Camp</span>
                                  <span>31.4%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ── SPINE MARKER ── */}
                  <div className="absolute left-[7px] lg:left-1/2 -translate-x-1/2 top-7 z-10">
                    <div
                      className={`w-[14px] h-[14px] ${markerClasses} shadow-sm`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Spacer for the opposite side on desktop */}
                  <div className="hidden lg:block lg:w-[calc(50%-36px)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Historical Consensus Closing Block */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-8 bg-katiba-gray-50 border border-katiba-gray-200 border-l-[6px] border-l-katiba-green rounded-2xl">
          <h4 className="font-sans font-bold text-base sm:text-lg text-katiba-black mb-2">
            The Historical Consensus
          </h4>
          <p className="font-serif text-[17px] text-katiba-gray-600 leading-[1.6]">
            The 2010 Constitution was forged through decades of civic resistance, constitutional conferences, and democratic sacrifice. It replaced an imperial presidency with devolved self-governance, independent oversight, and justiciable civil liberties.
          </p>
        </div>
      </div>
    </section>
  );
}
