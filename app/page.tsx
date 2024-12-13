import { Suspense } from "react";
import ClientComponent from "./(routes)/client-component/page";

export default function Home() {
  return (
    <div className="">
        <Suspense fallback={<div className="bg-black  p-5">Loading...</div>}>
          <ClientComponent />
        </Suspense>
    </div>
  );
}
