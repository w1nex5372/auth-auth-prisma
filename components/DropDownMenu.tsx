'use client'
import {Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button} from "@nextui-org/react";



import React from 'react'

const DropDownMenu = ({ handleMenuAction }) => {
  return (
    <div className="flex justify-end">
      <Dropdown className="p-2 bg-white rounded-lg shadow-md">
        <DropdownMenu aria-label="Link Actions">
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
      </Dropdown>
    </div>
  );
};


export default DropDownMenu