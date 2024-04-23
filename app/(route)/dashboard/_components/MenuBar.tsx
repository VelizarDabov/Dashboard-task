import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"


const MenuBar = () => {
  return (
    <div className="flex justify-between  w-[50%] ">
        <Menubar className="bg-gray-600 mx-10">
  <MenubarMenu>
    <MenubarTrigger className="bg-black text-white rounded-lg">Overview</MenubarTrigger>
    <MenubarTrigger className="text-gray-300">Analitics</MenubarTrigger>
    <MenubarTrigger className="text-gray-300">Reports</MenubarTrigger>
    <MenubarTrigger className="text-gray-300">Notifications</MenubarTrigger>

  </MenubarMenu>
</Menubar>
    </div>
  )
}

export default MenuBar