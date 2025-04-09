import TextLeftPageStarter from "@/components/section/TextLeftPageStarter";
import PageBorders from "@/components/Wrappers/PageBorders";

export const metadata = {
  title: "Mask HR",
  description: "Welcome to Mask HR",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="">
        <PageBorders>
          <TextLeftPageStarter title={"Title"} SubtitleText={"Subtitle"} />
        </PageBorders>
      </div>
    </div>
  );
}
