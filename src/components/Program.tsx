import { programSchedule } from "@/constants/program";

export default function Program() {
  return (
    <div className="flex items-center justify-center py-10 px-6">
      <div className="max-w-6xl w-full">
        <p className="border border-primary rounded-full px-4 py-2 w-52 text-center text-white bg-secondary/10 mb-10">
          Program Schedule
        </p>
        <div>
          {programSchedule.map((item, index) => (
            <div key={item.id} className="flex gap-x-3 relative">
              {/* Time */}
              <div className="min-w-[80px] text-end mt-1">
                <span className="text-xs text-white">{item.time}</span>
              </div>

              {/* Dot + Line */}
              <div className="relative flex flex-col items-center mt-2">
                <div className="relative z-10 w-4 h-4 rounded-full bg-primary"></div>
                {index < programSchedule.length - 1 && (
                  <div className="w-px flex-1 bg-secondary mt-0.5"></div>
                )}
              </div>

              {/* Label & Description */}
              <div className="grow pt-0.5 pb-8">
                <h3 className="font-semibold text-white text-lg">
                  {item.label}
                </h3>
                {item.desc && <p className="mt-1 text-gray-400">{item.desc}</p>}
                {item.desc2 && (
                  <p className="mt-1 text-gray-400">{item.desc2}</p>
                )}

                {/* Sub-items */}
                {item.subItems &&
                  item.subItems.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="mt-2 pl-4 border-l border-secondary"
                    >
                      <p className="text-white font-semibold">{sub.name}</p>
                      {sub.era && (
                        <p className="text-secondary text-sm">
                          {sub.era} | {sub.region}
                        </p>
                      )}
                      <p className="text-gray-400 text-sm">{sub.details}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
