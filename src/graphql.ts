
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface MessageSchema {
    id: number;
    FromId: string;
    ToId: string;
    text: string;
}

export interface IQuery {
    MessageById(FromId: string, ToId: string): MessageSchema[] | Promise<MessageSchema[]>;
}

type Nullable<T> = T | null;
