// import React from "react";
// import { useNavigate } from "react-router-dom";
// import bikesData from "../assets/bikes/data_bikes"; 
// import bikesImage from "../assets/commencal_bikes.png";

// export default function Bikes() {
//   const navigate = useNavigate();

//   return (
//     <div style={{ padding: 0 }}>
//       {/* Верхнє зображення */}
//       <div style={{ marginLeft: "-20px", marginRight: "-20px" }}>
//         <img
//           src={bikesImage}
//           alt="Header"
//           style={{
//             width: "100%",
//             height: "300px",
//             objectFit: "cover",
//             display: "block",
//           }}
//         />
//       </div>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: 30,
//           padding: 30,
//           justifyItems: "center",
//         }}
//       >
//         {bikesData.map((bike) => (
//           <div
//             key={bike.id}
//             style={{
//               width: "100%",
//               maxWidth: 500,
//               border: "1px solid #ccc",
//               borderRadius: 10,
//               padding: 20,
//               boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//               backgroundColor: "#fff",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <img
//               src={bike.image}
//               alt={bike.name}
//               style={{
//                 width: "100%",
//                 height: 320,
//                 objectFit: "cover",
//                 borderRadius: 8,
//                 marginBottom: 15,
//               }}
//             />
//             <h3 style={{ margin: "15px 0", fontSize: "1.3em", textAlign: "center" }}>
//               {bike.name}
//             </h3>
//             <p style={{ marginBottom: 15, fontSize: "1em", fontWeight: "bold" }}>
//               {bike.price}
//             </p>
//             <button
//               onClick={() => navigate(`/bikes/${bike.category}/${bike.id}`)}
//               style={{
//                 padding: "10px 16px",
//                 cursor: "pointer",
//                 borderRadius: 6,
//                 backgroundColor: "#28a745",
//                 color: "#fff",
//                 border: "none",
//                 fontSize: "1em",
//                 width: "100%",
//               }}
//             >
//               Детальніше
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import bikesData from "../assets/bikes/data_bikes";
import bikesImage from "../assets/commencal_bikes.png";

const validCategories = ["enduro", "dh", "gravel", "trail", "ebike"];

export default function Bikes() {
  const navigate = useNavigate();
  const { category } = useParams();

  const selectedCategory = validCategories.includes(category) ? category : null;

  const filteredBikes = selectedCategory
    ? bikesData.filter(bike => bike.category === selectedCategory)
    : bikesData;

  return (
    <div>
      <div style={{ marginLeft: "-20px", marginRight: "-20px" }}>
        <img
          src={bikesImage}
          alt="Header"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
      </div>

      <nav style={{ display: "flex", justifyContent: "center", gap: 15, margin: 20 }}>
        <button
          onClick={() => navigate("/bikes")}
          style={{
            padding: "8px 16px",
            backgroundColor: !selectedCategory ? "#007bff" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          All Bikes
        </button>

        {validCategories.map(cat => (
          <button
            key={cat}
            onClick={() => navigate(`/bikes/${cat}`)}
            style={{
              padding: "8px 16px",
              backgroundColor: selectedCategory === cat ? "#007bff" : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 30,
          padding: 20,
          justifyItems: "center",
        }}
      >
        {filteredBikes.length > 0 ? (
          filteredBikes.map(bike => (
            <div
              key={bike.id}
              style={{
                width: "100%",
                maxWidth: 510,
                border: "1px solid #ccc",
                borderRadius: 10,
                padding: 20,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={bike.image}
                alt={bike.name}
                style={{
                  width: "100%",
                  height: 320,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 15,
                }}
              />
              <h3 style={{ margin: "15px 0", fontSize: "1.3em", textAlign: "center" }}>
                {bike.name}
              </h3>
              <p style={{ marginBottom: 15, fontSize: "1em", fontWeight: "bold" }}>
                {bike.price}
              </p>
              <button
                onClick={() => navigate(`/bikes/${bike.category}/${bike.id}`)}
                style={{
                  padding: "10px 16px",
                  cursor: "pointer",
                  borderRadius: 6,
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  fontSize: "1em",
                  width: "100%",
                }}
              >
                More Details
              </button>
            </div>
          ))
        ) : (
          <p>No bikes found for the selected category.</p>
        )}
      </div>
    </div>
  );
}

