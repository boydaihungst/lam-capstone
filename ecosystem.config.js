/* eslint-disable max-len */
module.exports = {
  apps: [
    {
      name: 'capstone',
      script: './dist/bundle.js',
      watch: false,
      env_production: {
        NODE_ENV: 'production',
      },
      error_file: '.log/err.log',
      out_file: '.log/out.log',
      time: true,
    },
  ],
  deploy: {
    // "production" is the environment name
    production: {
      // SSH key path, default to $HOME/.ssh
      // key: '~/.ssh/id_rsa.pub',
      // SSH user
      user: 'lam',
      // SSH host
      host: ['149.28.148.148'],
      // SSH options with no command-line flag, see 'man ssh'
      // can be either a single string or an array of strings
      //ssh_options: 'StrictHostKeyChecking=no',
      // GIT remote/branch
      ref: 'origin/master',
      // GIT remote
      repo: 'git@github.com:boydaihungst/lam-capstone.git',
      // path in the server
      path: '/home/lam/capstone-project',
      // Pre-setup command or path to a script on your local machine
      'pre-setup': '',
      // Post-setup commands or path to a script on the host machine
      // eg: placing configurations in the shared dir etc
      'pre-deploy': 'git reset --hard',
      'post-setup': 'ls -la',
      // pre-deploy action
      'pre-deploy-local': '',
      ignore_watch: ['dist', 'node_modules'],
      // post-deploy action
      'post-deploy':
        'yarn install && yarn build && pm2 startOrRestart ecosystem.config.js --env production && pm2 save',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
};
