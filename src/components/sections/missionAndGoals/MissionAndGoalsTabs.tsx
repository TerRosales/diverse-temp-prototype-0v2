// components/CustomTabs.js
"use client";
import { useState } from "react";
import MissionComponent from "./MissionComponent";
import GoalsComponent from "./GoalsComponent";

export default function MissionAndGoalsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Mission", content: <MissionComponent /> },
    { id: 1, label: "Goals", content: <GoalsComponent /> },
  ];

  return (
    <div className="w-full max-w-8xl mx-auto mt-10 bg-blue-200">
      {/* Tabs Header */}
      <div className="flex justify-center mx-[40%] border-b-2 border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`mx-auto py-2 px-4 font-semibold focus:outline-none ${
              activeTab === tab.id
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="text-center bg-gray-100 rounded-lg">
        {tabs[activeTab].content}
      </div>
      <section className="h-auto mb-20 p-20">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          tenetur atque reprehenderit quo, mollitia fugit, distinctio odit
          exercitationem sapiente laborum ad autem at dolores dicta maxime
          excepturi quasi? Quo mollitia necessitatibus est nostrum cum id
          libero, molestiae laboriosam obcaecati, soluta error. Temporibus
          pariatur optio obcaecati iusto natus sapiente magnam exercitationem
          dolore porro tempore, hic quo incidunt voluptate repellendus a minus
          delectus ducimus perspiciatis amet ex tenetur unde deserunt itaque
          placeat! Provident delectus, incidunt quaerat unde deserunt voluptate
          quod tenetur iusto, fugit dolore fuga saepe, tempore nulla est ad
          reiciendis itaque. Unde dignissimos odio ipsam est fugiat, fugit
          veniam at voluptatum.
        </p>
      </section>
    </div>
  );
}
