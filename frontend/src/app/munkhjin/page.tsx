import {
  Search,
  PostProject,
  Contact,
  BuyNow,
  ViewServices,
  ListService,
} from "@/components/Button";

const page = () => {
  return (
    <div className="w-screen">
      <Search />
      <PostProject />
      <Contact />
      <BuyNow />
      <ViewServices />
      <ListService />
    </div>
  );
};
export default page;
