import React from "react";
// import { useNavigate } from "react-router-dom";
import { PiNotePencilDuotone } from "react-icons/pi";
import IconButton from "../../components/button/icon-button";

type Page = {
  name: string;
  route?: string;
  icon?: React.ReactNode;
};


export default function Dashboard() {
 

  const pagesArr: Page[] = [
    {
      name: "Dashboard",
    },
    {
      name: "OrderList",
    },
    {
      name: "OrderDetail",
    },
    {
      name: "Customer",
    },
    {
      name: "Analytics",
    },
  ];

  // const navigate = useNavigate();

  // const openPage = (route: string) => {
  //   navigate(`/dashboard/${route}`);
  // };

  return (
    <div
      className="row m-0 p-0"
      style={{
        border: "1px solid red",
        height: "100vh",
        background: "#000000",
      }}
    >
      <div
        className="col-2 d-flex flex-column justify-content-between"
        style={{ background: "#1A1A1A" }}
      >
        <div className="row py-3">
          {pagesArr.map((x, index) => (
            <div key={index}>
              <IconButton
                //   onClick={
                //       () => openPage(x.route)
                //   }
                className="item_active my-2 py-3"
                startIcon={x.icon ? x.icon : <PiNotePencilDuotone />}
                label={x.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-10" style={{ background: "transparent" }}>
        <div className="row d-flex align-items-between justify-content-center border border-success h-100 m-0 p-0">
          {/* <Routes>
          <Route path="" element={<DashboardPage />} />
          <Route path="order-list-page" element={<OrderListPage />} />
          <Route path="order-detail-page" element={<OrderDetailPage />} />
          <Route path="customer-page" element={<CustomerPage />} />
          <Route path="analytics-page" element={<AnalyticsPage />} />
          <Route path="reviews-page" element={<ReviewsPage />} />
          <Route path="food-page" element={<FoodPage />} />
          <Route path="food-detail-page" element={<FoodDetailPage />} />
          <Route path="customer-detail-page" element={<CustomerDetailPage />} />
          <Route path="calender-page" element={<CalenderPage />} />
          <Route path="chat-page" element={<ChatPage />} />
          <Route path="wallet-page" element={<WalletPage />} />
        </Routes>*/}
        </div>
      </div>
    </div>
  );
}
