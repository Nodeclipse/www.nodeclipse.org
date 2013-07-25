You just need to 

0. Give me your SourceForge account (needed for step 6)
1. download Eclipse Kepler standard distribution
2. Extract and start Eclipse

3. create workspace ../ws
4. Use Enide file http://marketplace.eclipse.org/content/enide-eclipse-nodejs-ide for links to needed plugin and install them one by one (due to bug in Kepler I would not recommend to try via File -> Import, but tell me if that helps)

Please install exactly the same plugins as described on http://marketplace.eclipse.org/content/nodeclipse-nts

4.2 Take https://github.com/Nodeclipse/eclipse-node-ide/blob/master/dropins/ com.pauzies.minimap_1.0.0.201301120125.jar and put it into Eclipse dropins

4.3 Configure https://github.com/Nodeclipse/eclipse-node-ide/#configuration

4.4 Steps inside 4. may require several Eclipse restarts.
5. Zip Eclipse with ws together giving nodeclipse-nodejs-ide-NTS-kepler-ubuntu32-0410-0709.zip like name.
6. Upload to SourceForge
7. send email, tweet about #nodeclipse #nts, be ready to help with ubuntu specific problems on http://stackoverflow.com/questions/tagged/nodeclipse