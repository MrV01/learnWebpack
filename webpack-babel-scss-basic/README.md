NPM

npm init -y
npm install webpack webpack-dev-server --save-dev
npm install sass-loader node-sass css-loader extract-text-webpack-plugin babel-core babel-loader babel-preset-es2015 --save-dev

Attention:
npm WARN prefer global node-gyp@3.6.1 should be installed with -g
Fix:
npm install node-gyp -g
C:\Program Files\nodejs\node-gyp -> C:\Program Files\nodejs\node_modules\node-gyp\bin\node-gyp.js


GIT & git-bash

0. In order to make git-bash work with extended character sets please set up
in  ~/.bash_profile  following:

export LANG=en_US.UTF-8
export LOCALE=UTF-8


1. Configure the  SSH keys for the "github"  repository access
https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
2.  Set up GIT bash  ~/.bashrc  profile.
   -  GIT completion  for git-bash https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash

   - GIT   prompt  
        Standard  git-prompt.sh
          https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh
   -OR-
        An informative and fancy bash prompt for Git users
          https://github.com/magicmonty/bash-git-prompt

          cd ~
          git clone https://github.com/magicmonty/bash-git-prompt.git .bash-git-prompt --depth=1

          Add to the ~/.bashrc:
              GIT_PROMPT_ONLY_IN_REPO=1
              source ~/.bash-git-prompt/gitprompt.sh    


- Auto-launching SSH  agent on GIT for Windows.

#
# Auto-launching ssh-agent on Git for Windows
#  https://help.github.com/articles/working-with-ssh-key-passphrases/
#

env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
            (umask 077; ssh-agent >| "$env")
                . "$env" >| /dev/null ;
}

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2= agent not running

agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env

cd "C:\Users\Vlad\Documents\PROG\HTML5"
