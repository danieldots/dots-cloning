import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom' 

export const HeaderStyle = styled.header`
    position: fixed;
    margin-top: 0px;
    margin-left: 0px;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 2;
    border-bottom: 0.5px solid #e3e3e3;
    @include media-breakpoint(md) {
        min-width: unset;
    }
`

export const HeaderContent = styled.div`
    isplay: flex;
    align-items: center;
    padding: 10px 0 0;
    width: 100%;
    flex-wrap: wrap;
    @include media-breakpoint(md) {
    padding: 0 67px;
    width: calc(100% - 50px);
    min-width: 870px;
    margin-bottom: 0;
    }
    @include media-breakpoint(xl) {
    margin: 0 auto;
    padding: 0;
    width: 1024px;
    }
`
export const HeaderLogo = styled.img`
    margin-right: 22.5px;
    margin-left: 34px;
    width: 19px;
    height: 31px;
    @include media-breakpoint(md) {
    margin: 0 30px 0 12px;
    width: 36px;
    height: 32px;
    }
`

export const HeaderTextLogo = styled.div`
    cursor: pointer;
    width: 116px;
    height: 34px;

    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
`

export const HeaderPurchaseWrap = styled.div`
    display: flex;
    margin-left: auto;
`

export const HeaderLinks = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0;
    margin-right: auto;
    margin-top: 11px;
    padding-left: 0;
    @include media-breakpoint(md) {
    margin-top: unset;
    margin-left: 0px;
    width: fit-content;
`
export const HeaderLinkItem = styled.li`
    @include media-breakpoint(md) {
        margin-right: 16px;
    }

    margin-right: 26px;
    list-style: none;

    &:first-child {
        margin-left: 33px;
    }

    &:last-child {
        margin-right: 0;
    }
`

export const HeaderLink = styled.div`
    position: relative;
    display: block;
    text-decoration: none;
    padding: 10px 6px;
    font-size: 15px;
    color: $gray-800;
    font-weight: 500;
    transition: none;
    @include media-breakpoint(md) {
    padding: 21px 10px;
    font-size: 15px;
    line-height: normal;
    }

    &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: $black-200;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s;
    content: '';
    }

    &:hover,
    &:active,
    &.active {
        font-weight: bold;
        color: $black-200;

        &::before {
            transform: scaleX(1);
        }
    }
    }
`

export const HeaderButton = styled.div`
    &--admission {
        order: 3;
        margin-right: 22px;
        padding: 10px 21px;
        border: 0;
        border-radius: 6px;
        color: $white;
        font: 700 16px/18px 'Pretendard';
        background-color: $purple;
        width: 173px;

        &:hover {
        background: #4a4fc1;
        color: #e2e2e2;
        cursor: pointer;
        }

        &--complete {
        padding: 10px 15px;
        background-color: #e9e9fd;
        color: #686df1;
        &:hover {
            background-color: #e9e9fd;
            color: #686df1;
            cursor: pointer;
        }
        }
    }

    &--profile {
        // margin-left: auto;
        &--image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        }

        &:hover {
        cursor: pointer;
        }

        position: relative;
        order: 4;
        margin-right: 34px;
        border-radius: 50%;

        width: 32px;
        height: 32px;

        @include media-breakpoint(md) {
        margin-right: 47px;
        width: 38px;
        height: 38px;
        }
        @include media-breakpoint(xl) {
        margin-right: unset;
        }
    }

    &--anonym-profile {
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
        cursor: pointer;
        }

        position: relative;
        order: 4;
        margin-right: 34px;

        width: 54px;
        height: 32px;

        @include media-breakpoint(md) {
        margin-right: 47px;
        width: 54px;
        height: 38px;
        }
        @include media-breakpoint(xl) {
        margin-right: unset;
        }
    }
`