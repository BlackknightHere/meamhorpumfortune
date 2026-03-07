import { useParams, Link } from "react-router-dom";
import { getPhoneBySlug } from "../data/phoneData";

function PhoneNumberDetail() {
  const { slug } = useParams();
  const phone = getPhoneBySlug(slug);

  // ไม่พบเบอร์
  if (!phone) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-8">
            ไม่พบข้อมูลเบอร์ที่ค้นหา
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gradient text-white font-medium transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            กลับหน้าหลัก
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div
        className="w-full max-w-[650px] rounded-2xl overflow-hidden border border-primary-600/30 animate-fade-in-up"
        style={{
          background: "linear-gradient(145deg, #1a1030, #0d0818)",
          boxShadow: "0 15px 35px rgba(147, 51, 234, 0.15)",
        }}
      >
        {/* Header */}
        <div
          className="px-6 pt-10 pb-5 text-center relative"
          style={{
            background:
              "radial-gradient(circle at top, rgba(147, 51, 234, 0.15), transparent)",
          }}
        >
          {/* Price Badge */}
          <div className="absolute top-6 right-6 text-sm sm:text-base font-semibold text-primary-400 border border-primary-500/50 px-4 py-1 rounded-full backdrop-blur-sm">
            ราคา {phone.price}
          </div>

          {/* Phone Number */}
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-wider my-3"
            style={{
              background:
                "linear-gradient(to right, #a855f7, #d8b4fe, #7c3aed, #c4b5fd, #6d28d9)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {phone.phoneNumber}
          </h1>

          {/* Rank & Score */}
          <div className="flex items-baseline justify-center gap-4">
            <span
              className="text-5xl font-bold text-emerald-400"
              style={{ textShadow: "0 0 15px rgba(52, 211, 153, 0.5)" }}
            >
              {phone.rank}
            </span>
            <span className="text-gray-400 text-sm">
              คะแนน {phone.score}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-10 pb-10">
          {/* Descriptions Section */}
          <div className="flex items-center gap-2.5 text-lg font-semibold text-primary-400 mt-6 mb-4 pb-2 border-b border-primary-500/30">
            <span>✨</span>
            <span>สรุปผลวิเคราะห์ดวงชะตา</span>
          </div>

          {phone.descriptions.map((item, index) => (
            <div
              key={index}
              className="mb-4 leading-relaxed text-gray-300 text-[0.95rem]"
            >
              <strong className="text-white">{item.label}:</strong> {item.text}
            </div>
          ))}

          {/* Predictions Section */}
          {phone.predictions && phone.predictions.length > 0 && (
            <>
              <div className="flex items-center gap-2.5 text-lg font-semibold text-primary-400 mt-10 mb-2 pb-2 border-b border-primary-500/30">
                <span>🔮</span>
                <span>ผลคำทำนายโชคชะตา</span>
              </div>
              <div className="text-sm text-gray-400 mb-6 italic">
                น้ำหนักคำทำนายจาก 100% แบ่งได้ดังนี้
              </div>

              <div className="space-y-6">
                {phone.predictions.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-primary-500/20 p-5 transition-all hover:bg-primary-900/10"
                    style={{
                      background: "rgba(147, 51, 234, 0.03)",
                    }}
                  >
                    <p className="text-gray-200 text-[0.95rem] leading-relaxed mb-4">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                          style={{ width: `${item.weight}%` }}
                        ></div>
                      </div>
                      <div className="text-primary-300 font-medium text-sm whitespace-nowrap">
                        น้ำหนัก {item.weight}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Back Button */}
          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gradient text-white font-medium transition-all hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              กลับหน้าหลัก
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumberDetail;
