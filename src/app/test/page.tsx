import ScrollOpposite from "@/components/scroll/scroll-opposite";

export default function TestPage() {
  return (
    <div>
      <div className="h-screen" />
      <ScrollOpposite height="50vh" >
        <div key="1" className="h-(--height)">
          <h1 className="text-2xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio, excepturi, a libero consequuntur omnis quasi deserunt vitae dolorum aut, unde eaque. Consequatur rerum deserunt repellendus. Temporibus voluptates natus debitis?</h1>
        </div>
        <div key="2" className="h-(--height) ">
          <h1 className="text-2xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio, excepturi, a libero consequuntur omnis quasi deserunt vitae dolorum aut, unde eaque. Consequatur rerum deserunt repellendus. Temporibus voluptates natus debitis?</h1>
        </div>
        <div key="3" className="h-(--height) ">
          <h1 className="text-2xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio, excepturi, a libero consequuntur omnis quasi deserunt vitae dolorum aut, unde eaque. Consequatur rerum deserunt repellendus. Temporibus voluptates natus debitis?</h1>
        </div>
        <div key="4" className="h-(--height) ">
          <h1 className="text-2xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio, excepturi, a libero consequuntur omnis quasi deserunt vitae dolorum aut, unde eaque. Consequatur rerum deserunt repellendus. Temporibus voluptates natus debitis?</h1>
        </div>
      </ScrollOpposite>
      <div className="h-screen" />
    </div>
  );
}
