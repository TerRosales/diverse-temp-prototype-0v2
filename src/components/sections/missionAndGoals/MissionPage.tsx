// pages/index.js
import "@/styles/sectionStyles/m&g.css";

import MissionAndGoalsTabs from "./MissionAndGoalsTabs";

export default function MissionPage() {
  return (
    <div className="pt-16">
      <h1 className="w-full text-center text-2xl font-bold mb-6">
        Next.js Custom Tabs
      </h1>
      <MissionAndGoalsTabs />
    </div>
  );
}
