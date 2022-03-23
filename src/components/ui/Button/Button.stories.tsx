import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VkIcon, GoogleIcon, TwitterIcon, SortIcon } from '@assets/images';
import Button from './Button';

export default {
    title: 'UI / Button',
    component: Button,
    argTypes: {
        icon: {
            control: {
                type: 'file'
            }
        },
        children: {
            type: 'string'
        },
        type: {
            control: {
                type: 'select'
            }
        },
        state: {
            control: {
                type: 'select'
            }
        },
        justifyContent: {
            control: {
                type: 'select'
            }
        }
    },
    args: {
        type: undefined,
        isDisabled: false,
        state: undefined,
        to: '',
        justifyContent: undefined,
        leftIcon: false,
        rightIcon: false,
        fillWidth: false,
        children: 'Text',
        standardLink: false,
        isRounded: false
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    fillWidth: true
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    fillWidth: true
};

export const Social = Template.bind({});
const icons = { VkIcon: <VkIcon />, GoogleIcon: <GoogleIcon />, TwitterIcon: <TwitterIcon /> };
Social.args = {
    type: 'social',
    children: 'VkIcon',
    isRounded: true
};
Social.argTypes = {
    children: {
        options: Object.keys(icons),
        mapping: icons,
        control: {
            type: 'select',
            labels: {
                VkIcon: 'Vk',
                GoogleIcon: 'Google',
                TwitterIcon: 'Twitter'
            }
        }
    }
};

export const Star = Template.bind({});
Star.args = {
    type: 'star',
    leftIcon: true
};

export const Clear = Template.bind({});
Clear.args = {
    type: 'clear'
};

export const Sort = Template.bind({});
const sortIcon = { SortIcon: <SortIcon /> };
Sort.args = {
    type: 'social',
    state: 'static',
    children: 'SortIcon'
};
Sort.argTypes = {
    children: {
        options: Object.keys(sortIcon),
        mapping: sortIcon,
        control: {
            type: 'select',
            labels: {
                SortIcon: 'Sort'
            }
        }
    }
};
