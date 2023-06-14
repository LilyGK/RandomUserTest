import {AriaRole} from "../base-locators";

export const Title = {
    infoSectionRole: 'contentinfo' as AriaRole,
    role :"heading" as AriaRole,
    name : "Random User Generator"

}

export const UserItems = {
    role: "list" as AriaRole,
    name: '[data-title="Hi, My name is"]',
    email: '[data-title="My email address is"]',
    birthdate: '[data-title="My birthday is"]',
    address:'[data-title="My address is"]',
    phone:'[data-title="My phone number is"]',
    password:'[data-title="My password is"]'

}

export const userTitle= '[id="user_title"]'
export const userValue = '[id="user_value"]'
export const userPhoto = '[id="user_photo"]'
export const newButton = '#user_photo > a'

export const userPhotoImg = '#user_photo > img'








