/* eslint-disable max-len */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { add, allGens, mult, repeatTillConst } from "./helpers";

export {}

let input = `



mdssmj sbmmz hqrvjl nvdb zbtfmm tcggh ntflq qtgnmh xxbcf hccpxrj btlp kltchzf rqqk hsdtj qbhn gmvnhk jdxzk fznxss xncgqbcp xqsd xlbj vpqqs hlbm fvxttld xgzbpc brdsq gtln gcn fmn dmzp rjfx ncq khlctv lcld szldsb rkctqn qnhjhn cglnb lrqf lgnhmx lfktg rzrktx mfvccgh ddlpm vzdg hqtbp hgktzrt qkzh rspc fqnhx cnlh rknzzz frkmp hjtzd mbbrs qhdx tkfcg kqvzv qbsbqg ghbqrf lrq llbz bfdkx nbhrt zdvcr qhqs xxbhz lspbvr pvbh (contains fish)
qnhjhn dkpl tcggh mbbrs pnqbk mhbnhc cglnb zdvcr jkvgr jgpd jjpkzbt ddlpm thgtxbf msjfd rfmgs nfxl fvxttld xlbj frkmp gtln zbtfmm dlbtn lbdtc kjk xdtz ntflq pckczs qhqs fnsvv ldcchl zpfkx ps xncgqbcp skhfsp bcjds hqrvjl fznxss lgnhmx fblmbr ghbqrf tfgdsb xfdm gcn jnvd ztzt xzbczx sgkcqjp hgktzrt rbgs dhsnxr vpqqs gkpplb lxbzm jhggpn fqnhx vsvv plc (contains dairy)
xgzbpc sqbpt dj fqnhx lvjssr rjfx rspc dmh ztzt dkmsq qtgnmh dnvd lgnhmx kqvzv sqth ssnsg hlbm cknzqm mgzrb msjfd sgkcqjp rhdtg szldsb vbh xqmfx zzjsbzq tmgxj htdlvvp jjpkzbt fvkvbzt rbgs ntflq dhsnxr rshlr jqljxkvd slg lrq ttlfl dkpl fglb ldcchl zpfkx blgdhht rqqk sbtrh hgktzrt dhnv cnlh fznxss lzgdcs sdvrk rkctqn pbvzmm qnhjhn sbmmz lbnnl pnqbk zntzrj gxccm rfp lspbvr gdmqf grlrkg qhqs rhpx jkvgr nbhrt kpkdn zbtfmm lfktg jmps bctl frkmp mdssmj rzrktx kjk qpvhj xfdm (contains peanuts, wheat)
dlbtn rhdtg mhbnhc msjfd lfktg tnqnqds nfxl cknzqm fhh dhsnxr dhnv ssnsg pckczs qkzh kpgrnq hccpxrj ghbqrf zzjsbzq vjb xqsd xxbhz zjppq gzdfgb rlkz qhdx xdtz qslg jsmbrv cnlh bnf lsqtx mdssmj kpkdn xncgqbcp dkpl xksnqr xfdm vzdg lvjssr ft hpqvklk frkmp hsdtj rzrktx rknzzz mfvccgh nmc pxmdd kjk brdsq pnqbk btlp jnvd qjrkqm srlcnsk qbqpfj dmh hqtbp qhqs vslcmtm cglnb dkmsq cvcplp lcld lgnhmx pngst bcjds tkfcg pvbh ntflq skmp fznxss jvrbr xqmfx (contains dairy)
ppchhn hpqvklk nbttp khlctv hgktzrt lgnhmx kqvzv xgzbpc mhbnhc pngst qnhjhn rbgs tkfcg lsqtx zzjsbzq dkpl jlsdm xxbcf skhfsp dcsp qbqpfj ntflq bnf qgcgb fglb gcn plc tmgxj qhqs qslg qkzh frkmp cvcplp cglnb sbtrh fhh rkctqn rhpx jvrbr hccpxrj xlbj rfmgs lzgdcs rknzzz zjppq xfdm zdvcr rzrktx dkmsq qhdx vbh bjcgj zvzfv ssnsg kpgrnq dnvd gfgzc mfvccgh pnqbk xxbhz xdtz rlkz ldcchl hzplb bctl dhsnxr ft ncq bfdkx rhdtg mbbrs ssl bhdnj lxbzm (contains sesame)
qnhjhn hqtbp pbvzmm fvxttld zbtfmm cnlh qbhn qpvhj jkvgr lcld skmp qslg rznt qhdx ntflq pckczs xncgqbcp jgpd bnf dnvd jqljxkvd pnqbk lgnhmx tmxrcxc rlkz rbgs sgkcqjp hpqvklk lvjssr fznxss kpgrnq qhphr dj cknzqm nbhrt lmkmds tcggh hsdtj frkmp flr ldcchl xksnqr jnvd lrqf ncq dkpl jhggpn dhsnxr xfdm rzrktx fglb hlbm nbttp rjfx bmntvhq fhh zzjsbzq xxbcf skhfsp lzgdcs dkmsq sbmmz rfmgs gmvnhk hzplb qkzh gcn kjk ppchhn klrrjm (contains sesame, peanuts, wheat)
ztzt vsvv rbgs rfmgs jhggpn rknzzz lrq sbtrh srlcnsk dj lspbvr qnhjhn rzrktx bfdkx fblmbr dcsp qhqs zjppq tcggh hbpj lbdtc vvnkntn gkpplb dkmsq fhh lxbzm ssnsg rhdtg mhbnhc klrrjm fvkvbzt grlrkg xncgqbcp qhphr xfdm qslg qbhn hqrvjl dmh pngst thgtxbf ft pbvzmm rkctqn qtgnmh fvxttld fnsvv ntflq hpqvklk dhsnxr xxbhz rspc xgzbpc mbbrs ncq btlp mgzrb kpgrnq hgktzrt kpkdn mcksd bctl ptqdxp flr ssl lgnhmx (contains shellfish)
bhdnj lcld cvcplp zvzfv ttlfl qslg blgdhht gkpplb zpfkx thgtxbf dmh sbmmz bfdkx fznxss pqvnbp tcggh lbdtc xfdm qkzh hlbm dj pnqbk lxbzm lmkmds rfnjh bcjds gtln cknzqm hsdtj lgnhmx xqmfx pngst tnqnqds kltchzf rhdtg ddlpm hccpxrj qjrkqm flr lsqtx ft qhqs dnvd kpgrnq nmc sbtrh frkmp jlsdm rfmgs jhggpn xgzbpc dhsnxr mfvccgh rqqk vvnkntn jjpkzbt kpkdn rznt rjfx bctl pckczs sqth xncgqbcp dlbtn vpqqs mdssmj zjppq lspbvr xdtz kjk skmp qnhjhn ldcchl brdsq mbbrs tfgdsb nfxl rlkz hbpj qbhn qbsbqg rzrktx ptqdxp tkfcg msjfd zbtfmm sgkcqjp (contains dairy, sesame)
llbz tkfcg qbqpfj xfdm pckczs dhnv ssl bcjds lsqtx bhdnj ssnsg qgcgb htdlvvp zbtfmm dmzp vjb xxbhz rhdtg mfvccgh lgnhmx qbsbqg ps skmp vzdg zjppq blgdhht fhh jsmbrv nmc mgzrb dhsnxr rqqk dlbtn hccpxrj hlbm grlrkg jgpd ptqdxp hqtbp jjpkzbt sdvrk lcld ft xxbcf zntzrj lmkmds lbnnl gtln tnqnqds nfxl frkmp bmntvhq rzrktx mdssmj dmh jlsdm hqrvjl zvzfv pqvnbp bctl ddlpm btcrl vgttl bnf ghbqrf qnhjhn slg jdxzk jqljxkvd kpkdn hzplb sbtrh msjfd tfgdsb gfgzc cvcplp dkmsq xncgqbcp rshlr sqth qhqs khlctv plc rfp flr (contains nuts)
xnx vgttl rhdtg cknzqm htdlvvp qnhjhn gcn mdssmj xqsd dlbtn qbsbqg pbvzmm qhrhv dmh hqtbp xncgqbcp rhpx ntflq rfnjh lbdtc qbqpfj slg dj ddlpm mfvccgh tfgdsb vbmv lgnhmx zdvcr nbhrt ztzt xqmfx msjfd rjfx rbgs fznxss mcksd llbz lrq jqljxkvd rfp xxbcf fhh jlsdm dmzp qtgnmh dcsp xdtz sqth pqvnbp zntzrj kpgrnq plc fmn frkmp rzrktx lvjssr klrgzp dhsnxr tcggh qjrkqm pnqbk gzdfgb jmps gfgzc (contains wheat)
gjmqvb qbhn qbqpfj rknzzz lspbvr mfvccgh rznt fnsvv kpkdn pqvnbp jjpkzbt frkmp ssnsg zvzfv cglnb hgktzrt rqqk xnx hccpxrj rspc lgnhmx qkzh jkvgr tcggh xncgqbcp ntflq qnhjhn btcrl dcsp hsdtj xlbj rfp bnf pxmdd slg hzplb tfgdsb ft jhggpn lfktg sqth vsvv vslcmtm gdmqf bmntvhq xxbcf hlbm dhsnxr mhbnhc fmn qjrkqm klrrjm vpqqs sqbpt kqvzv qhqs rhdtg (contains peanuts)
qtgnmh bmntvhq dhnv nmc qnhjhn jnvd rjfx nvdb skmp lsqtx rzrktx xncgqbcp rfnjh lgnhmx qhdx rhdtg vpqqs qjrkqm jmps slg frkmp btcrl dmzp gfgzc klrgzp qhqs qslg zzjsbzq blgdhht lfktg kpkdn gtln mgzrb xqsd lrq ptqdxp szldsb ncq sqbpt gzdfgb xgzbpc qpvhj mbbrs grllk jhggpn lxbzm lbdtc cknzqm rknzzz tmgxj ntflq hjtzd dcsp (contains dairy, peanuts, soy)
bhdnj hsdtj zpfkx hccpxrj llbz lspbvr bjcgj btlp rznt fmn fglb mdssmj vslcmtm gfgzc qnhjhn thgtxbf klrgzp lrq ttlfl cglnb lsqtx rzrktx xgzbpc zjppq kqvzv ptqdxp xqmfx rshlr gmvnhk qbsbqg hqtbp ntflq pngst bmntvhq rfp bfdkx lxbzm jlsdm skmp xncgqbcp lgnhmx sqbpt hqrvjl nbttp rkctqn qkzh lbnnl ps qslg zdvcr skhfsp qgcgb flr vkzn mfvccgh xdtz gdmqf nfxl frkmp qhqs msjfd bnf gxccm tmxrcxc ldcchl ssl cnlh (contains nuts)
rzrktx lfktg gdmqf mhbnhc qnhjhn hpqvklk grllk zpfkx fznxss pnqbk szldsb gfgzc dnvd klrrjm brdsq hbpj jvrbr ptqdxp frkmp kltchzf hqrvjl ghbqrf rlkz xgzbpc qhqs dj ntflq mcksd cnlh rbgs mbbrs jsmbrv tmgxj xncgqbcp dmzp plc qtgnmh blgdhht vbmv dlbtn ncq hjtzd tkfcg mfvccgh jkvgr zzjsbzq lgnhmx cknzqm (contains wheat, shellfish, nuts)
gxccm zpfkx dnvd brdsq lrq ztzt mcksd lrqf ntflq dcsp vsvv cglnb qjrkqm dhsnxr lgnhmx qhqs qbhn lbnnl sgkcqjp vslcmtm hqtbp ssl gzdfgb xncgqbcp flr qhdx ldcchl ptqdxp hjtzd qpvhj bcjds rlkz klrrjm skmp rzrktx pbvzmm pngst xksnqr rhdtg bhdnj msjfd qbqpfj lmkmds vzdg hbpj hccpxrj nbhrt nbttp ttlfl qnhjhn jsmbrv lxbzm dkpl lzgdcs fglb dhnv mgzrb kpkdn mfvccgh dmh (contains nuts)
lgnhmx jkvgr fblmbr dkmsq ttlfl hbpj plc xqmfx zvzfv jvrbr cglnb zdvcr qbqpfj lsqtx dnvd xncgqbcp fhh xzbczx rspc dhsnxr jmps qpvhj tcggh rfp frkmp skmp pqvnbp rfmgs ppchhn qnhjhn ps btcrl slg lcld pvbh vslcmtm ptqdxp hzplb ntflq jsmbrv rzrktx sdvrk fnsvv ghbqrf gjmqvb vgttl grllk hqtbp jlsdm vbh fmn fvkvbzt xksnqr btlp (contains dairy, soy, wheat)
qgcgb xncgqbcp frkmp hpqvklk bctl rhpx kqvzv xgzbpc sbtrh cglnb gfgzc lgnhmx qnhjhn hqrvjl xdtz hbpj rknzzz btlp lspbvr rkctqn lbnnl fnsvv cknzqm rbgs rfnjh ztzt sqth grlrkg ft vbh jdxzk pnqbk nbhrt gkpplb mcksd ntflq rlkz rzrktx dkpl khlctv lrqf ps gzdfgb tkfcg dkmsq dhsnxr kpgrnq brdsq fmn vvnkntn lxbzm slg cnlh srlcnsk skhfsp rhdtg (contains soy)
xqmfx gtln mfvccgh kqvzv hccpxrj dhsnxr bctl qgcgb thgtxbf hzplb rfnjh qslg xxbhz rqqk zntzrj zpfkx xksnqr gfgzc jqljxkvd klrgzp vbh dkpl rkctqn ntflq gzdfgb ptqdxp blgdhht frkmp qbhn pbvzmm flr skhfsp dcsp xncgqbcp tnqnqds rzrktx lspbvr brdsq hpqvklk rznt tmgxj jgpd mbbrs bnf vvnkntn pngst xzbczx rhpx lgnhmx dmzp dj qbsbqg qnhjhn bcjds qbqpfj btlp zjppq pvbh hsdtj fznxss cnlh jdxzk xnx kpkdn rknzzz nmc bmntvhq dlbtn vslcmtm grlrkg sqbpt lbnnl hqtbp bfdkx vpqqs qtgnmh ztzt nvdb jjpkzbt kltchzf qhphr rfp mgzrb (contains soy, peanuts, dairy)
jsmbrv thgtxbf dnvd sqth mfvccgh jkvgr qkzh zjppq jlsdm ft khlctv htdlvvp qbhn hlbm kqvzv gdmqf ddlpm fhh qnhjhn mgzrb jmps rspc flr frkmp hqtbp btlp plc lrqf lgnhmx xqsd mhbnhc tfgdsb hpqvklk jjpkzbt ssnsg ttlfl ntflq mbbrs qhdx rfmgs vpqqs rzrktx pqvnbp dmh qtgnmh sdvrk cvcplp brdsq klrrjm rknzzz xncgqbcp dkpl dhsnxr dmzp vkzn slg (contains fish, shellfish)
vpqqs gkpplb fglb tcggh qhdx rqqk sqth sdvrk fznxss xdtz tkfcg nbttp thgtxbf nvdb nmc rzrktx lbdtc mfvccgh hqtbp vbmv vjb dhsnxr plc dkpl ppchhn hccpxrj xqsd ghbqrf jkvgr qhqs xqmfx sbmmz qjrkqm bcjds klrrjm sqbpt jnvd dnvd gdmqf rznt lgnhmx lspbvr fmn ntflq hzplb fnsvv qbsbqg kqvzv mdssmj xgzbpc qtgnmh brdsq rhdtg qhphr rhpx ssnsg jqljxkvd ssl zdvcr dmh xncgqbcp qnhjhn tmxrcxc dmzp pngst flr srlcnsk zvzfv fvkvbzt rjfx ncq xnx rknzzz jgpd hpqvklk xfdm (contains soy, peanuts)
cglnb vslcmtm ssnsg sgkcqjp jdxzk qnhjhn xncgqbcp jnvd ntflq xdtz tnqnqds qhphr dhsnxr sdvrk rhdtg fhh bhdnj jkvgr tkfcg htdlvvp zpfkx hqtbp lgnhmx gzdfgb qbsbqg zntzrj qhqs ssl cknzqm fvxttld ncq frkmp lxbzm zvzfv fqnhx dmzp lzgdcs jvrbr (contains nuts, dairy)
tkfcg xdtz xksnqr lbnnl lgnhmx lmkmds xncgqbcp rzrktx vbh cvcplp jjpkzbt dhnv nmc zbtfmm gmvnhk frkmp qnhjhn fglb htdlvvp dhsnxr qhphr gdmqf cnlh rlkz vbmv vjb ssnsg ldcchl gxccm bcjds zjppq hqtbp xqmfx nbttp rfp xgzbpc pvbh klrrjm gtln bhdnj xqsd vvnkntn rkctqn nvdb btcrl dlbtn hsdtj gjmqvb zntzrj jkvgr lrqf bjcgj hzplb sqbpt slg rznt lsqtx ztzt bfdkx mdssmj qhqs gkpplb xzbczx qtgnmh szldsb sgkcqjp xlbj mgzrb ptqdxp thgtxbf gzdfgb kltchzf fhh (contains fish)
hlbm hjtzd zbtfmm sdvrk lgnhmx lzgdcs sbmmz ntflq pnqbk skmp frkmp klrgzp dkpl ps qbsbqg kltchzf hbpj vpqqs dmzp qhqs qnhjhn dhnv hpqvklk ssl rlkz jjpkzbt sqth srlcnsk rzrktx rhdtg dkmsq mbbrs qbhn dhsnxr rshlr klrrjm pqvnbp zjppq bctl dj lfktg msjfd ppchhn rfp jmps jnvd nmc xlbj plc xxbcf qslg nbhrt (contains fish, sesame)
kjk frkmp bhdnj dj vsvv szldsb hqtbp pvbh qbqpfj vbmv rzrktx dlbtn kltchzf qkzh bmntvhq hpqvklk hzplb zpfkx vzdg kpgrnq ptqdxp qslg rhpx dkpl dhsnxr xksnqr xqsd rfp ntflq jqljxkvd lrqf hccpxrj qnhjhn qjrkqm msjfd jhggpn zntzrj rfnjh dcsp btcrl gxccm khlctv rqqk gcn fvkvbzt ft xfdm fznxss rshlr vvnkntn pckczs tfgdsb klrrjm lgnhmx hbpj qhrhv blgdhht hjtzd lbnnl zvzfv lcld jnvd grlrkg ddlpm qhqs sdvrk zzjsbzq dnvd pbvzmm lrq fmn lmkmds htdlvvp ssnsg grllk fqnhx (contains soy, shellfish)
llbz btcrl qnhjhn khlctv skhfsp pnqbk sqbpt ptqdxp ddlpm vzdg qhphr qtgnmh fglb vpqqs cnlh hqtbp bmntvhq lspbvr vkzn lbnnl bnf lsqtx lgnhmx fnsvv pqvnbp pbvzmm mcksd qbhn lzgdcs dhsnxr dkmsq vjb slg dmh sdvrk ppchhn ntflq vsvv srlcnsk lrq sqth brdsq ft hpqvklk sbtrh nbhrt hzplb rzrktx kjk qslg mbbrs xxbcf qhqs klrgzp sgkcqjp gjmqvb dmzp kpgrnq hlbm xksnqr bjcgj zjppq lcld mdssmj ncq dcsp hccpxrj tkfcg gzdfgb frkmp nmc blgdhht zzjsbzq jvrbr plc lxbzm xfdm tmxrcxc (contains wheat, soy, fish)
slg jnvd rknzzz htdlvvp sqth kpkdn qhqs frkmp pbvzmm vgttl mgzrb vkzn xlbj pvbh qbsbqg mfvccgh klrrjm sbmmz ppchhn skmp xzbczx lgnhmx ntflq dhsnxr qhrhv qnhjhn ssnsg dlbtn tmgxj rfnjh xksnqr nvdb rzrktx nfxl rhpx nmc fqnhx kqvzv mbbrs ttlfl vbmv vslcmtm dkpl (contains sesame)
dhsnxr rhdtg grlrkg qnhjhn tnqnqds mhbnhc zbtfmm hpqvklk hsdtj zpfkx khlctv qbsbqg rzrktx vbmv frkmp bnf slg sbmmz jdxzk xncgqbcp ptqdxp fnsvv hccpxrj dhnv thgtxbf dmzp lvjssr hzplb qhqs ssnsg lbnnl vpqqs nvdb xnx kjk lgnhmx lcld ps rlkz xksnqr ttlfl pbvzmm bjcgj gxccm brdsq nfxl qhdx blgdhht xqmfx flr qtgnmh lrqf (contains peanuts)
jkvgr qhqs fhh tfgdsb xxbhz ldcchl gjmqvb ntflq tcggh xgzbpc zzjsbzq plc gdmqf xksnqr rhdtg ncq sdvrk hjtzd vpqqs pxmdd sqbpt qhdx rfmgs xqsd mbbrs frkmp gfgzc zpfkx qtgnmh mgzrb rshlr rfnjh ssl lxbzm qnhjhn xxbcf vjb lbdtc lspbvr lzgdcs dcsp rqqk pngst jdxzk gcn fvxttld bcjds cnlh xlbj xncgqbcp kltchzf rzrktx thgtxbf kqvzv zntzrj rjfx zbtfmm qbsbqg pvbh lgnhmx (contains dairy)
pbvzmm rjfx flr lspbvr ntflq lfktg qbhn mhbnhc lgnhmx lsqtx vzdg dhsnxr qnhjhn pqvnbp rzrktx plc lrq blgdhht hgktzrt ft fvkvbzt fznxss zvzfv zbtfmm jnvd kpgrnq rznt kpkdn rfp rknzzz gcn qjrkqm qhqs jhggpn lxbzm xncgqbcp dkpl xksnqr (contains soy, peanuts, nuts)
bnf cknzqm kjk tmxrcxc hccpxrj gmvnhk hgktzrt skhfsp qhqs ldcchl qnhjhn btcrl rzrktx frkmp zjppq zpfkx ncq fblmbr lspbvr xqmfx gkpplb xncgqbcp fqnhx lrq msjfd ztzt zzjsbzq kltchzf fmn ft nmc vgttl ttlfl qtgnmh ntflq vbh jmps qpvhj xlbj lgnhmx qbsbqg rknzzz bfdkx qjrkqm hzplb fglb dnvd fvxttld hlbm dlbtn cglnb (contains fish, dairy, peanuts)
ztzt fvkvbzt ntflq fglb kpgrnq hpqvklk lgnhmx hjtzd nbhrt gdmqf qjrkqm hbpj qbhn qnhjhn hzplb xqsd nmc msjfd rzrktx ncq rznt ptqdxp fblmbr mdssmj jdxzk cknzqm klrgzp qgcgb tnqnqds xfdm qkzh ldcchl grllk vbh dlbtn bcjds lvjssr nbttp plc rfmgs btlp khlctv qtgnmh rbgs pbvzmm lmkmds rfnjh tmxrcxc gxccm frkmp jvrbr rqqk ssnsg xxbcf zjppq skmp cnlh zpfkx dhsnxr skhfsp vgttl qhqs hgktzrt jjpkzbt fhh hlbm (contains soy)
lvjssr hzplb pqvnbp jhggpn grllk qbhn qslg rhdtg qkzh ntflq qjrkqm rfnjh rbgs tkfcg llbz nbttp fmn rznt hlbm bjcgj rspc tmgxj lxbzm lbnnl vgttl frkmp pnqbk rshlr jmps tnqnqds pngst flr dmh jgpd hqtbp ssnsg pbvzmm sbmmz jqljxkvd mgzrb kltchzf btcrl gjmqvb sqth ft lrqf qnhjhn vkzn zbtfmm jlsdm brdsq kqvzv jnvd pxmdd ttlfl dhsnxr rjfx qhrhv mfvccgh thgtxbf rzrktx ps qgcgb ppchhn bcjds qhqs rqqk hqrvjl rfp qpvhj srlcnsk xncgqbcp plc dj gmvnhk gcn dmzp fnsvv zjppq vbmv (contains nuts)
qnhjhn brdsq lzgdcs qpvhj jvrbr hccpxrj htdlvvp xqmfx kqvzv ddlpm tfgdsb qgcgb tkfcg mfvccgh jmps srlcnsk xlbj jkvgr lbnnl ntflq klrgzp dcsp rfp sgkcqjp kjk hsdtj xncgqbcp sbtrh nbttp qbhn grlrkg rshlr dhsnxr qslg ztzt sbmmz bmntvhq tcggh szldsb rfmgs qjrkqm khlctv pqvnbp vgttl skmp mcksd pvbh nbhrt lgnhmx mdssmj gtln fmn rzrktx rknzzz frkmp (contains soy, dairy)
nmc tmgxj vkzn vbmv lgnhmx qhqs jnvd lsqtx dhsnxr ncq xqsd xgzbpc lrq frkmp hqtbp rjfx rspc sbmmz qbqpfj bnf nbhrt lzgdcs xfdm tkfcg ntflq dnvd tnqnqds sqbpt vsvv rhdtg ssl xncgqbcp xnx qjrkqm qnhjhn grlrkg htdlvvp gcn gxccm xdtz dlbtn rfnjh fvxttld bfdkx kjk bcjds rfmgs lxbzm (contains soy)
slg btlp jlsdm lcld lgnhmx cnlh sbtrh lrq klrrjm lbdtc rlkz bhdnj bfdkx lbnnl skhfsp jqljxkvd frkmp nvdb rhpx lrqf jjpkzbt gzdfgb dcsp lzgdcs pvbh fhh rspc hqrvjl qhqs gtln xxbhz jnvd szldsb vpqqs qnhjhn jvrbr bmntvhq lvjssr tnqnqds tmgxj ppchhn dmh gdmqf ntflq jdxzk rfnjh pxmdd gjmqvb dkmsq pqvnbp rqqk kpgrnq ghbqrf fvkvbzt xzbczx ztzt xdtz tcggh zdvcr sqbpt rbgs gcn zpfkx fqnhx rzrktx mbbrs xxbcf dj bnf gxccm xncgqbcp (contains peanuts, wheat, dairy)
rkctqn fglb lbnnl dmh fnsvv rznt jsmbrv xqmfx pnqbk vzdg vvnkntn cglnb frkmp pngst bctl qbsbqg rjfx mcksd xncgqbcp gtln rshlr pvbh qhqs sbmmz fvxttld tmxrcxc rknzzz gdmqf vslcmtm grlrkg kpgrnq vbmv jdxzk xqsd lxbzm ncq fhh jlsdm klrrjm dnvd xnx qpvhj dkmsq ssl gcn qhrhv dhsnxr gjmqvb nfxl fvkvbzt skhfsp sqbpt hgktzrt qnhjhn slg bfdkx ppchhn jqljxkvd gfgzc rzrktx gkpplb ntflq vkzn rqqk rfp (contains soy, fish)
zpfkx flr vbmv zvzfv ssnsg tmxrcxc qhdx xksnqr zbtfmm jmps kjk lbnnl ttlfl klrgzp frkmp dj ssl cknzqm pckczs xncgqbcp gxccm xqsd rzrktx lsqtx fvkvbzt sqth mfvccgh xxbhz qjrkqm jgpd thgtxbf cvcplp kltchzf dhsnxr hpqvklk bfdkx qnhjhn jjpkzbt ztzt dmh bhdnj dnvd gmvnhk ntflq gtln ddlpm hlbm ppchhn qhqs nbttp rshlr grllk tfgdsb hgktzrt msjfd vslcmtm sqbpt zntzrj lxbzm qgcgb qhphr hzplb rfp lfktg hbpj cglnb lrq hjtzd fglb mgzrb nbhrt qpvhj jlsdm rknzzz vbh fblmbr (contains shellfish, soy)
ddlpm nfxl xdtz dmh grlrkg qhqs qtgnmh hccpxrj skmp sgkcqjp cglnb dkpl cnlh srlcnsk ldcchl xnx gzdfgb ntflq xzbczx lbdtc zntzrj ps fglb bcjds dmzp dj qnhjhn rjfx ztzt pckczs pngst mfvccgh rzrktx dhsnxr btlp cknzqm lgnhmx ssl rqqk vgttl fvxttld frkmp vkzn ft dlbtn jkvgr ghbqrf (contains shellfish)
rshlr hqrvjl gcn gxccm cglnb bhdnj lsqtx hlbm zbtfmm vkzn xnx ft hqtbp lgnhmx tmgxj bcjds ldcchl sgkcqjp jdxzk qbsbqg thgtxbf rknzzz xncgqbcp dhsnxr rspc klrrjm rfmgs gdmqf vbh zvzfv mgzrb jqljxkvd rhpx dlbtn lbnnl hccpxrj frkmp vbmv ztzt nmc dj jnvd cvcplp dmh vslcmtm rzrktx srlcnsk hjtzd tkfcg jkvgr qhqs btlp htdlvvp qtgnmh vsvv qnhjhn fqnhx bjcgj ncq xqsd tnqnqds jsmbrv ddlpm rjfx jhggpn lmkmds blgdhht (contains dairy, shellfish, wheat)
ttlfl bfdkx hqtbp pvbh qjrkqm fblmbr nmc rfnjh lzgdcs lrqf jkvgr bcjds rznt dlbtn qnhjhn fvxttld gcn klrgzp slg rkctqn rfmgs gkpplb frkmp hlbm mgzrb ntflq dhsnxr sbmmz nfxl rhdtg zbtfmm sgkcqjp btcrl htdlvvp cknzqm vgttl fqnhx rzrktx gjmqvb qhrhv qhqs rfp jgpd lcld nbhrt sqbpt pckczs xncgqbcp qtgnmh hpqvklk (contains peanuts)
ncq lrq hjtzd xlbj frkmp nbttp klrrjm xksnqr gzdfgb sbmmz htdlvvp vjb llbz zdvcr ptqdxp btcrl qnhjhn vslcmtm sqth xncgqbcp qhqs slg ntflq flr msjfd jjpkzbt rznt dmzp jkvgr hbpj lgnhmx rknzzz jnvd bjcgj rlkz gkpplb qhphr fglb gjmqvb vpqqs ssnsg rzrktx fblmbr khlctv hgktzrt gxccm gtln lsqtx jmps blgdhht (contains dairy, soy)
skhfsp grllk vgttl rfmgs srlcnsk vjb qnhjhn jjpkzbt gzdfgb nmc grlrkg bjcgj plc dhnv jvrbr pxmdd sgkcqjp mhbnhc hbpj hqtbp lbdtc dmh gcn hpqvklk dhsnxr ppchhn mfvccgh lcld zjppq sbmmz zdvcr frkmp mcksd rhpx gxccm ntflq lgnhmx bfdkx tkfcg bmntvhq rznt btcrl pvbh qslg xncgqbcp pbvzmm vsvv xnx dcsp vvnkntn rzrktx rlkz fblmbr klrrjm dmzp btlp flr jgpd qpvhj jsmbrv lzgdcs rhdtg (contains wheat, dairy)
rknzzz rfp rzrktx jjpkzbt kjk xncgqbcp mbbrs ttlfl dhsnxr pqvnbp vbh vsvv rznt qhdx fglb xnx lcld fznxss tfgdsb ntflq tmgxj thgtxbf khlctv grllk kpgrnq hbpj sqbpt skmp dlbtn jvrbr mgzrb qnhjhn xfdm hsdtj pbvzmm bfdkx vbmv lbnnl lgnhmx ddlpm qtgnmh nmc frkmp bhdnj brdsq lxbzm (contains dairy)
dhsnxr gxccm skmp lspbvr lmkmds rfp mdssmj lcld jlsdm xqmfx lrqf kltchzf qnhjhn ztzt pbvzmm lgnhmx xxbhz ps xgzbpc xncgqbcp tcggh rkctqn vpqqs zntzrj sbmmz tmxrcxc ntflq pvbh gkpplb ghbqrf sgkcqjp lbnnl rshlr gmvnhk vslcmtm dkmsq frkmp xfdm jsmbrv rzrktx dmh lsqtx skhfsp sdvrk dkpl bnf vbh gcn rfmgs cnlh fqnhx nbhrt nbttp dnvd (contains dairy, wheat)
vbmv qhrhv brdsq zvzfv bcjds vgttl zntzrj rjfx lxbzm ppchhn ntflq plc hbpj xzbczx zzjsbzq rfp thgtxbf bjcgj lzgdcs hjtzd frkmp kjk hzplb dj tfgdsb hgktzrt pxmdd sgkcqjp ps nbttp dmzp zjppq nmc hccpxrj xncgqbcp rhpx qnhjhn ddlpm ncq lmkmds dhsnxr dlbtn blgdhht qhqs bhdnj lgnhmx rbgs rfnjh (contains fish, sesame)
flr srlcnsk dkpl nmc ttlfl fblmbr pngst fqnhx vzdg xnx lfktg sqth slg lspbvr dlbtn hzplb kjk pvbh bjcgj rzrktx gzdfgb qhqs skmp nvdb frkmp jqljxkvd gcn lbdtc mcksd ssl vgttl gfgzc jdxzk dhsnxr qjrkqm jnvd fhh gxccm vkzn gjmqvb qnhjhn ntflq cknzqm rqqk zzjsbzq vbh lzgdcs grllk xncgqbcp bcjds sbtrh sgkcqjp tkfcg hqtbp bhdnj cnlh zpfkx kpkdn klrrjm kpgrnq sbmmz jlsdm jkvgr (contains peanuts)
vvnkntn xgzbpc dhsnxr dkpl ppchhn gkpplb lmkmds rbgs hpqvklk xncgqbcp grlrkg bctl fnsvv jkvgr szldsb qbsbqg klrrjm rkctqn sbmmz vbh xxbhz ncq nbhrt tmgxj cglnb qjrkqm lgnhmx zvzfv khlctv gfgzc fhh xlbj frkmp fvkvbzt vjb qnhjhn xzbczx ntflq xqsd mbbrs srlcnsk rfnjh rlkz ztzt qhqs mgzrb kjk thgtxbf lzgdcs (contains dairy, wheat)
msjfd gdmqf thgtxbf rspc brdsq slg sgkcqjp vslcmtm flr dmh sqth vgttl jmps zvzfv nfxl sdvrk qbsbqg mbbrs dkpl rznt rhpx qnhjhn hsdtj plc ppchhn sqbpt rknzzz qtgnmh fznxss vbh tmxrcxc gfgzc frkmp gzdfgb cknzqm hqtbp rzrktx gjmqvb mdssmj pngst dnvd xxbhz pxmdd kpkdn zbtfmm mhbnhc ft qhqs qhrhv hlbm bcjds rqqk lmkmds ntflq grlrkg rfmgs nbhrt ztzt qslg mcksd ncq tfgdsb kltchzf dj xksnqr nmc sbmmz rhdtg dkmsq xzbczx dcsp cvcplp dhsnxr xncgqbcp ldcchl fvxttld qjrkqm vsvv (contains fish, shellfish, nuts)


`.trim();

const testInput1 = `



mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
trh fvjkl sbzzf mxmxvkd (contains dairy)
sqjhc fvjkl (contains soy)
sqjhc mxmxvkd sbzzf (contains fish)



`.trim()

const { log } = console;

// console.log = () => {} // <----------------------------------

// input = testInput1; // <---------------------------------------


const lines = input.split("\n");

const getIngs = (x: string) => x.split(" (")[0].split(" ")
const getAlgs = (x: string) => x.split("(")[1].split(" ").slice(1).join(" ").slice(0, -1)
  .split(", ");

const ings = [...new Set(lines.flatMap(getIngs))]
const algs = [...new Set(lines.flatMap(getAlgs))]

const filteredIngs = ings.map(ing => {
  const pAlgs = new Set(algs);
  for(const line of lines) {
    if(!line.includes(ing)) {
      for(const alg of getAlgs(line))
        pAlgs.delete(alg)
    }
  }
  return [ing, pAlgs] as const
}).filter(x => x[1].size !== 0)
  .sort((a, b) => a[1].size - b[1].size)

const ingsToAlgs = new Map<string, string>();

for(const [ing, pAlgs] of filteredIngs) {
  const alg = [...pAlgs].find(x => ![...ingsToAlgs.values()].includes(x))!
  ingsToAlgs.set(ing, alg);
}


log(


  // ingsToAlgs,
  [...ingsToAlgs.entries()]
    .sort(([, a], [, b]) => a < b ? -1 : 1)
    .map(x => x[0])
    .join(",")





)
