// Import Dropdown component and its types
import { Dropdown, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import React from 'react';

interface DropDownMenuProps {
  handleMenuAction: (actionType: string) => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ handleMenuAction }) => {
  return (
    <div className="flex justify-end">
      <Dropdown className="p-2 bg-white rounded-lg shadow-md">
        {/* Adding DropdownItem components as an array */}
        {[
          <DropdownMenu aria-label="Link Actions" key="dropdown-menu">
            <DropdownItem className="p-1" onClick={() => handleMenuAction('delete')}>
              Delete
            </DropdownItem>
            <DropdownItem className="p-1" onClick={() => handleMenuAction('addUser')}>
              Add user
            </DropdownItem>
            <DropdownItem className="p-1" onClick={() => handleMenuAction('reportPost')}>
              Report post
            </DropdownItem>
            <DropdownItem className="p-1" onClick={() => handleMenuAction('blockUser')}>
              Block user
            </DropdownItem>
          </DropdownMenu>
        ]}
      </Dropdown>
    </div>
  );
};

export default DropDownMenu;
