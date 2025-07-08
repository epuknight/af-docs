import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home() {
  return <Redirect to="/help-center/intro" />; // đổi đúng route đầu tiên của tutorial
}
