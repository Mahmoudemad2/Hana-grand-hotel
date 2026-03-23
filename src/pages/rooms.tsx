import { useState } from "react";
import {
  Wifi,
  Tv,
  Coffee,
  Snowflake,
  Car,
  Star,
  X,
} from "lucide-react";

type Room = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  popular: boolean;
  description: string;
  amenities: string[];
  images: string[];
};

export default function Rooms() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: 1,
    checkIn: "",
    checkOut: "",
  });

  const icons: Record<string, JSX.Element> = {
    wifi: <Wifi className="w-5 h-5 text-blue-500" />,
    tv: <Tv className="w-5 h-5 text-purple-500" />,
    coffee: <Coffee className="w-5 h-5 text-yellow-600" />,
    ac: <Snowflake className="w-5 h-5 text-cyan-500" />,
    parking: <Car className="w-5 h-5 text-green-600" />,
  };

  const rooms: Room[] = [
    {
      id: 1,
      name: "Standard Room",
      category: "standard",
      price: 500,
      rating: 4.3,
      popular: true,
      description: "            غرفة مريحة وأنيقة تتمتع بإطلالة رائعة، مجهزة بكل وسائل الراحة الحديثة لضمان إقامة مثالية.                    ",
      amenities: ["wifi", "tv"],
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      ],
    },
    {
      id: 2,
      name: "Deluxe Room",
      category: "deluxe",
      price: 800,
      rating: 4.8,
      popular: false,
      description:  "  غرفة فاخرة وخدمات راقية  أوسع وخدمات راقية تناسب رجال الأعمال والمسافرين    ",
      amenities: ["wifi", "tv", "coffee", "ac", "parking"],
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
        "/room1.jpg", // ✔ لو الصورة في public
      ],
    },
    {
  id: 3,
  name: "Luxury Suite",
  category: "deluxe",
  price: 1200,
  rating: 4.9,
  popular: true,
  description: "جناح فاخر جدًا يحتوي على غرفة نوم وصالة وإطلالة بانورامية مميزة، مناسب للإقامة الملكية.",
  amenities: ["wifi", "tv", "coffee", "ac", "parking"],
  images: [
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"
  ]
}
  ];

  const categories = ["all", "standard", "deluxe"];

  const filteredRooms =
    filter === "all"
      ? rooms
      : rooms.filter((r) => r.category === filter);

  const getNights = () => {
    if (!form.checkIn || !form.checkOut) return 0;
    const start = new Date(form.checkIn);
    const end = new Date(form.checkOut);
    const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = getNights();
  const totalPrice = selectedRoom ? nights * selectedRoom.price : 0;

  const handleConfirm = () => {
    if (!selectedRoom) return;

    const phoneNumber = "201080249780";

    const message = `
حجز جديد:
الاسم: ${form.name}
الهاتف: ${form.phone}
الغرفة: ${selectedRoom.name}
من: ${form.checkIn}
إلى: ${form.checkOut}
الليالي: ${nights}
الإجمالي: ${totalPrice} جنيه
`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* فلتر */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 border ${
              filter === cat
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room) => (
          <div key={room.id} className="bg-white rounded shadow hover:shadow-xl transition">
            <img src={room.images[0]} className="w-full h-52 object-cover" />

            <div className="p-4">
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  {room.rating}
                </div>

                {room.popular && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    الأكثر حجزًا
                  </span>
                )}
              </div>

              <h3 className="font-bold text-lg">{room.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{room.description}</p>

              <p className="font-semibold mb-3">
                {room.price} جنيه / الليلة
              </p>

              {/* صور */}
              <div className="flex gap-2 overflow-x-auto mb-3">
                {room.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setSelectedImage(img)}
                    className="w-20 h-14 object-cover rounded cursor-pointer hover:scale-105 transition"
                  />
                ))}
              </div>

              {/* أيقونات */}
              <div className="flex gap-3 mb-4">
                {room.amenities.map((a, i) => (
                  <div key={i} className="bg-gray-100 p-2 rounded">
                    {icons[a]}
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelectedRoom(room);
                  setShowModal(true);
                }}
                className="w-full bg-black text-white py-2 hover:bg-gray-800"
              >
                احجز الآن
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal حجز */}
      {showModal && selectedRoom && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded p-6 space-y-4">
            <h2 className="text-xl font-bold text-center">
              حجز {selectedRoom.name}
            </h2>

            <input
              className="w-full border p-2"
              placeholder="الاسم"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              className="w-full border p-2"
              placeholder="الهاتف"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <input
              type="date"
              className="w-full border p-2"
              onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
            />

            <input
              type="date"
              className="w-full border p-2"
              onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
            />

            <div className="bg-gray-100 p-3 rounded text-sm">
              الليالي: {nights} <br />
              الإجمالي: {totalPrice} جنيه
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleConfirm}
                className="flex-1 bg-green-600 text-white py-2"
              >
                تأكيد
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-300 py-2"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {/* عرض الصورة */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} className="max-w-3xl rounded" />
        </div>
      )}
    </div>
  );
}