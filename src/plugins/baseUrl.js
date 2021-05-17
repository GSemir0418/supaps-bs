// eslint-disable-next-line import/no-mutable-exports
let baseUrl = '127.0.0.1:8080/'; // 这里是一个默认的url，可以没有

// eslint-disable-next-line default-case
switch (process.env.NODE_ENV) {
  case 'development':

    baseUrl = '192.168.94.20:81/';
    // 开发环境url

    break;

  case '10server':
    // 注意这里的名字要和步骤二中设置的环境名字对应起来

    baseUrl = '10.30.20.42:18888/';
    // 测试环境中的url

    break;
  case '10server_192':
    // 注意这里的名字要和步骤二中设置的环境名字对应起来

    baseUrl = '192.168.95.29:18888/';
    // 测试环境中的url

    break;

  case 'production':

    baseUrl = '10.30.20.42:18888/';
    // 生产环境url

    break;
}

export default baseUrl;
