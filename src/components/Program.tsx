export default function Program() {
  const schedule = [
    { time: "09:00 AM", label: "Registration & Welcome Coffee" },
    { time: "10:00 AM", label: "Opening Keynote" },
    { time: "11:30 AM", label: "Tech Innovations Session" },
    { time: "01:00 PM", label: "Networking Lunch" },
    { time: "02:30 PM", label: "Panel Discussion" },
  ];

  return (
    <div className="max-w-5xl">
      <div className="flex justify-center">
        <div className="relative">
          {schedule.map((item, index) => (
            <div className="grid grid-cols-3">
              <time className="block mb-2 text-sm font-semibold text-gray-300">
                {item.time}
              </time>

              {/* Dot */}
              <div className="relative">
                <p className="absolute left-5 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -start-3 ring-8 ring-black">
                  <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                </p>
              </div>
              <div
                key={index}
                className="relative border-s border-gray-700 grid grid-cols-2 mb-10 ms-6"
              >
                {/* Label */}
                <p className="ms-20 text-base font-normal text-gray-400">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
