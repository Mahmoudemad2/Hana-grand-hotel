import { useState } from "react";

type Room = {
  id: number;
  name: string;
  price: number;
};

const rooms: Room[] = [
  { id: 1, name: "Standard Room", price: 500 },
  { id: 2, name: "Deluxe Room", price: 800 },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const getNights = () => {
    if (!form.checkIn || !form.checkOut) return 0;
    const start = new Date(form.checkIn);
    const end = new Date(form.checkOut);
    const diff =
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = getNights();
  const total = selectedRoom ? nights * selectedRoom.price : 0;

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const handleConfirm = () => {
    if (!selectedRoom) return;

    const message = `
حجز جديد:
الاسم: ${form.name}
الهاتف: ${form.phone}
الغرفة: ${selectedRoom.name}
من: ${form.checkIn}
إلى: ${form.checkOut}
الليالي: ${nights}
عدد الأفراد: ${form.guests}
الإجمالي: ${total} جنيه
`;

    window.open(
      `https://wa.me/201080249780?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex justify-center" style={{marginTop:"100px"}}>
      <div className="w-full max-w-xl bg-white p-6 rounded shadow space-y-6">

        {/* Step Indicator */}
        <div className="flex justify-between text-sm">
          <span className={step >= 1 ? "font-bold" : ""}>1. الغرفة</span>
          <span className={step >= 2 ? "font-bold" : ""}>2. البيانات</span>
          <span className={step >= 3 ? "font-bold" : ""}>3. تأكيد</span>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold">اختر الغرفة</h2>

            {rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className={`p-4 border cursor-pointer ${
                  selectedRoom?.id === room.id
                    ? "border-black"
                    : "border-gray-300"
                }`}
              >
                {room.name} - {room.price} جنيه
              </div>
            ))}

            <button
              disabled={!selectedRoom}
              onClick={next}
              className="w-full bg-black text-white py-2 disabled:bg-gray-400"
            >
              التالي
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="font-bold">بيانات الحجز</h2>

            <input
              placeholder="الاسم"
              className="w-full border p-2"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="الهاتف"
              className="w-full border p-2"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              type="date"
              className="w-full border p-2"
              onChange={(e) =>
                setForm({ ...form, checkIn: e.target.value })
              }
            />

            <input
              type="date"
              className="w-full border p-2"
              onChange={(e) =>
                setForm({ ...form, checkOut: e.target.value })
              }
            />

            <input
              type="number"
              min={1}
              className="w-full border p-2"
              value={form.guests}
              onChange={(e) =>
                setForm({ ...form, guests: Number(e.target.value) })
              }
            />

            <div className="flex gap-2">
              <button onClick={back} className="flex-1 bg-gray-300 py-2">
                رجوع
              </button>

              <button
                onClick={next}
                className="flex-1 bg-black text-white py-2"
              >
                التالي
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && selectedRoom && (
          <div className="space-y-4">
            <h2 className="font-bold">تأكيد الحجز</h2>

            <div className="bg-gray-100 p-4 rounded text-sm">
              الغرفة: {selectedRoom.name} <br />
              الليالي: {nights} <br />
              الإجمالي: {total} جنيه
            </div>

            <div className="flex gap-2">
              <button onClick={back} className="flex-1 bg-gray-300 py-2">
                رجوع
              </button>

              <button
                onClick={handleConfirm}
                className="flex-1 bg-green-600 text-white py-2"
              >
                تأكيد وإرسال
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}