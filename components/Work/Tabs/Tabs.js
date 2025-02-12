import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "utils/cn";

const Tab = ({ index, tab, activeTab, handleOnClick, setIsHovering }) => {
  return (
    <button
      onMouseDown={() => handleOnClick(index)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative px-4 py-1 rounded-full cursor-none"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {activeTab.value === tab.value && (
        <motion.div
          layoutId="clickedbutton"
          transition={{ type: "spring", bounce: 0.3, duration: 0.7 }}
          className="absolute inset-0 bg-gray-dark-2 rounded-full"
        />
      )}

      <span
        className={cn(
          "relative text-white top-[3px] link",
          tab.value !== activeTab.value && "hover:text-gray-light-3"
        )}
      >
        {tab.title}
      </span>
    </button>
  );
};

const TabsContent = ({ tabs, isHovering }) => {
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, index) => {
        return (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - index * 0.1,
              top: isHovering ? index * -50 : 0,
              zIndex: -index,
              opacity: index < 3 ? 1 - index * 0.1 : 0,
            }}
            animate={{
              y: tab.value === tabs[0].value ? [0, 40, 0] : 0,
            }}
            className="w-full h-full absolute top-0 left-0 mt-36 md:mt-32"
          >
            {tab.content}
          </motion.div>
        );
      })}
    </div>
  );
};

const mouseClickSound = new Howl({
  src: ["/sounds/mouse-click.mp3"],
});

const Tabs = ({ tabItems }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [tabs, setTabs] = useState(tabItems);
  const [activeTab, setActiveTab] = useState(tabItems[0]);

  const handleOnClick = (index) => {
    const updatedTabs = [...tabItems];
    const selectedTab = updatedTabs.splice(index, 1);
    updatedTabs.unshift(selectedTab[0]);
    setTabs(updatedTabs);
    setActiveTab(updatedTabs[0]);
    mouseClickSound.play();
  };

  return (
    <div className="staggered-reveal">
      <div className="pt-12 flex flex-row justify-center items-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full">
        {tabItems.map((tab, index) => (
          <Tab
            key={tab.title}
            index={index}
            tab={tab}
            activeTab={activeTab}
            handleOnClick={handleOnClick}
            setIsHovering={setIsHovering}
          />
        ))}
      </div>
      <TabsContent
        key={activeTab.value}
        tabs={tabs}
        activeTab={activeTab}
        isHovering={isHovering}
      />
    </div>
  );
};

export default Tabs;



// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Howl } from "howler";
// import { cn } from "utils/cn";

// const Tab = ({ index, tab, activeTab, handleOnClick, setIsHovering }) => (
//   <button
//     onMouseDown={() => handleOnClick(index)}
//     onMouseEnter={() => setIsHovering(true)}
//     onMouseLeave={() => setIsHovering(false)}
//     className="relative px-4 py-1 rounded-full cursor-pointer transition-all duration-300"
//   >
//     {activeTab.value === tab.value && (
//       <motion.div
//         layoutId="activeTab"
//         transition={{ type: "spring", bounce: 0.3, duration: 0.7 }}
//         className="absolute inset-0 bg-gray-800 rounded-full"
//       />
//     )}
//     <span
//       className={cn(
//         "relative text-white top-[3px] link transition-all",
//         tab.value !== activeTab.value && "hover:text-gray-400"
//       )}
//     >
//       {tab.title}
//     </span>
//   </button>
// );

// const TabsContent = ({ tabs, isHovering }) => (
//   <div className="relative w-full h-full">
//     {tabs.map((tab, index) => (
//       <motion.div
//         key={tab.value}
//         layoutId={tab.value}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: index < 3 ? 1 - index * 0.1 : 0, y: isHovering ? -index * 20 : 0 }}
//         transition={{ type: "spring", duration: 0.6 }}
//         className="w-full h-full absolute top-0 left-0 mt-32"
//       >
//         {tab.content}
//       </motion.div>
//     ))}
//   </div>
// );

// const mouseClickSound = new Howl({
//   src: ["/sounds/mouse-click.mp3"],
//   volume: 0.5,
// });

// const Tabs = ({ tabItems }) => {
//   const [isHovering, setIsHovering] = useState(false);
//   const [tabs, setTabs] = useState(tabItems);
//   const [activeTab, setActiveTab] = useState(tabItems[0]);

//   const handleOnClick = (index) => {
//     const updatedTabs = [...tabItems];
//     const selectedTab = updatedTabs.splice(index, 1);
//     updatedTabs.unshift(selectedTab[0]);
//     setTabs(updatedTabs);
//     setActiveTab(updatedTabs[0]);
//     mouseClickSound.play();
//   };

//   return (
//     <div className="relative w-full staggered-reveal">
//       <div className="pt-12 flex flex-row justify-center items-center space-x-3 overflow-auto sm:overflow-visible no-scrollbar max-w-full">
//         {tabItems.map((tab, index) => (
//           <Tab
//             key={tab.value}
//             index={index}
//             tab={tab}
//             activeTab={activeTab}
//             handleOnClick={handleOnClick}
//             setIsHovering={setIsHovering}
//           />
//         ))}
//       </div>

//       <TabsContent tabs={tabs} isHovering={isHovering} />
//     </div>
//   );
// };

// export default Tabs;
