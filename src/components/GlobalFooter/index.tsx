import {
  BugOutlined,
  GithubOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import './index.less';

/**
 * 全局 Footer
 *
 * @author https://github.com/liyupi
 */
const GlobalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      className="default-footer"
      copyright={`${currentYear} cdeo`}
      links={[
        {
          key: 'master',
          title: (
            <>
              <UserOutlined /> cdeo
            </>
          ),
          href: 'https://github.com/coderGuoHL/sqlbase-fontend',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 代码已开源
            </>
          ),
          href: 'https://github.com/coderGuoHL/sqlbase-fontend',
          blankTarget: true,
        },
        {
          key: 'feedback',
          title: (
            <>
              <BugOutlined /> 交流QQ: 2396420165
            </>
          ),
          href: '.',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default GlobalFooter;
