export enum PageType {
  'index',
  'page'
}

export enum PublishStatus {
  'live',
  'draft',
  'archived'
}

export enum NoticeType {
  'warning',
  'important',
  'normal'
}

export interface ISimplePageData {
  id: string;
  type: PageType;
}

export interface IPage {
  id: number;
  title: string;
  body: string;
  slug: string;
  meta_description: string;
  context_type: string;
  publish_status: PublishStatus;
  page_child_order_rule: string;
  order: number;
  notice_type: NoticeType;
  full_url: string;
  breadcrumbs: Array<any>;
}

export interface IRelationships {
  parent: { data: Array<ISimplePageData> };
  tags: Array<string>;
  children: { data: Array<ISimplePageData> };
}

export interface IPageData {
  id: string;
  type: PageType;
  attributes: IPage;
  relationships: IRelationships;
}
