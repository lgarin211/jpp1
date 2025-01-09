# jpp1
devjeff

# coba saalin ini ke cmdnya
<code>
curl -s https://get.sdkman.io | bash;source $HOME/.sdkman/bin/sdkman-init.sh;sdk install java 17.0.13-amzn;sdk install gradle;echo "SDKMN UDAH";wget https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip -O android-sdk.zip;unzip android-sdk.zip -d android-sdk;rm -rf android-sdk.zip;sudo mv android-sdk /usr/local/android-sdk;echo "export ANDROID_HOME=/usr/local/android-sdk" >> $HOME/.bashrc;echo "export PATH=\$PATH:\$ANDROID_HOME/cmdline-tools/bin:\$ANDROID_HOME/platform-tools" >> $HOME/.bashrc;source $HOME/.bashrc;yes | sdkmanager --sdk_root=$ANDROID_HOME "platform-tools" "platforms;android-34" "build-tools;34.0.0";yes | sdkmanager --sdk_root=$ANDROID_HOME "platform-tools" "platforms;android-33" "build-tools;33.0.2";echo "Android Udh";npm install -g cordova;echo "cordova udh";yes | cordova platform add android@12.*;yes | cordova build android;mv /workspaces/jpp1/platforms/android/app/build/outputs/apk/debug/app-debug.apk /workspaces/jpp1/;echo "NIH APPSNYA DH JADI"
</code>


# ini opsi lain kalo bis lagi hokki
<code>
sudo chmod 777 adk.sh;./adk.sh 
</code>