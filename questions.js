const questionData =[
    {
        "id": 1,
        "level": 1,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "大人の体には、およそいくつの「骨」があるでしょうか？",
        "options": ["約50個", "約100個", "約200個", "約500個"],
        "answer": 2,
        "explanation": "正解は約200個です。生まれたばかりの赤ちゃんはもっと多いのですが、成長するにつれて骨同士がくっついて、大人になると約200個になります。",
        "reference": "Kaibou.pdf [1]"
    },
    {
        "id": 2,
        "level": 1,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "寒いときに体がガタガタと震える「シバリング」。これは何のために起きている？",
        "options": ["筋肉を動かして熱を作るため", "骨を丈夫にするため", "血液の流れを止めるため", "眠気を覚ますため"],
        "answer": 0,
        "explanation": "体温が下がると、体は自動的に筋肉を細かく震わせて熱を作り出そうとします。これを「シバリング」と呼びます。体温の維持には筋肉がとても重要なんです。",
        "reference": "Kaibou.pdf [2]"
    },
    {
        "id": 3,
        "level": 1,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "骨の成分として有名で、骨を硬く丈夫にしている「ミネラル（無機質）」は何？",
        "options": ["鉄分", "カルシウム", "ビタミンC", "ナトリウム"],
        "answer": 1,
        "explanation": "正解はカルシウム。体の中にあるカルシウムの約99%は骨に蓄えられています。骨は体を支えるだけでなく、カルシウムの貯蔵庫でもあるんですよ。",
        "reference": "Kaibou.pdf [2]"
    },
    {
        "id": 4,
        "level": 1,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "血液の成分である「赤血球」や「白血球」は、体のどこで作られている？",
        "options": ["心臓の中", "肝臓の中", "骨の中（骨髄）", "筋肉の中"],
        "answer": 2,
        "explanation": "意外かもしれませんが、血液は骨の内側にある「骨髄（こつずい）」という場所で作られています。骨は血液の工場でもあるんですね。",
        "reference": "Kaibou.pdf [3]"
    },
    {
        "id": 5,
        "level": 1,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "「アキレス腱」などで知られる「腱（けん）」の役割として正しいのはどれ？",
        "options": ["骨と骨をつなぐ", "筋肉と骨をつなぐ", "骨と皮膚をつなぐ", "筋肉同士をつなぐ"],
        "answer": 1,
        "explanation": "「腱」は、筋肉の力を骨に伝えるために、筋肉と骨をつなぐ丈夫なヒモのような組織です。アキレス腱は、ふくらはぎの筋肉をかかとの骨につないでいます。",
        "reference": "Kaibou.pdf [4]"
    },
    {
        "id": 6,
        "level": 1,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "では、骨と骨をつないで、関節が外れないように補強しているバンドのような組織は？",
        "options": ["神経", "血管", "脂肪", "靱帯（じんたい）"],
        "answer": 3,
        "explanation": "骨同士をつないでいるのは「靱帯」です。関節を安定させる役割があります。スポーツなどで無理な力がかかると、ここが傷ついて捻挫（ねんざ）になることがあります。",
        "reference": "Kaibou.pdf [4]"
    },
    {
        "id": 7,
        "level": 1,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "ヒトの首の骨（頸椎）は全部で何個ある？",
        "options": ["3個", "7個", "12個", "30個"],
        "answer": 1,
        "explanation": "ヒトの首の骨は7個です。実はキリンのような首の長い動物も、私たちと同じ7個の骨でできているんですよ。",
        "reference": "Kaibou.pdf [4]"
    },
    {
        "id": 8,
        "level": 1,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "ひじの関節は、ドアの開け閉めのように一方向に動きます。この関節の形を何という？",
        "options": ["球関節（ボールのような関節）", "蝶番関節（チョウツガイのような関節）", "平面関節", "車軸関節"],
        "answer": 1,
        "explanation": "ひじはドアの金具（蝶番：ちょうつがい）のように曲げ伸ばしができるので「蝶番関節」と呼ばれます。肩や股関節のようにグルグル回せる関節とは形が違うんです。",
        "reference": "Kaibou.pdf [5]"
    },
    {
        "id": 9,
        "level": 1,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "背骨を横から見たとき、どのような形をしているのが正常？",
        "options": ["定規のように真っ直ぐ", "S字のようなカーブ", "円のような丸い形", "直角に折れ曲がっている"],
        "answer": 1,
        "explanation": "背骨は緩やかなS字カーブを描いています。このカーブがクッションの役割を果たし、重い頭を支えたり、歩くときの衝撃を和らげたりしています。",
        "reference": "Kaibou.pdf [6]"
    },
    {
        "id": 10,
        "level": 1,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "自分の意志で動かせる筋肉（力こぶを作る筋肉など）を何という？",
        "options": ["随意筋（ずいいきん）", "不随意筋（ふずいいきん）", "心筋", "平滑筋"],
        "answer": 0,
        "explanation": "自分の意志で動かせる筋肉を「随意筋」といい、骨格筋がこれにあたります。逆に、心臓や胃腸の筋肉は意志では動かせないので「不随意筋」と呼ばれます。",
        "reference": "Kaibou.pdf [7], [2]"
    },
    {
        "id": 1,
        "level": 2,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "交通事故による高エネルギー外傷。傷病者は呼吸困難を訴え、吸気時に胸壁の一部が陥没し、呼気時に膨隆する「奇異呼吸」を呈している。この病態の解剖学的説明として適切なものはどれか？",
        "options": ["複数の肋骨が2か所以上で骨折し、胸郭の安定性が失われている（フレイルチェスト）", "胸腔内に空気が貯留し、肺が虚脱している（気胸）", "横隔膜が破裂し、腹腔内臓器が胸腔へ脱出している", "肋間筋の麻痺により、呼吸運動が停止している"],
        "answer": 0,
        "explanation": "複数の肋骨が複数箇所で折れると、その部位が胸郭の動きと逆（奇異）に動くフレイルチェスト（動揺胸郭）となる。これは換気効率を著しく低下させるため、現場では陽圧換気の必要性を考慮しつつ、受傷機転から肺挫傷の合併も疑う必要がある。（Kaibou.pdf p.102）",
        "reference": "Kaibou.pdf p.102"
    },
    {
        "id": 2,
        "level": 2,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "骨盤骨折が疑われる傷病者において、循環血液量減少性ショック（出血性ショック）のリスクが極めて高い解剖学的理由はどれか？",
        "options": ["骨盤内には大腿動脈が走行しているため", "骨盤骨折は必ず大腿骨骨折を合併するため", "後腹膜腔には静脈叢が豊富であり、大量の出血を貯留できるスペースがあるため", "骨盤骨折による痛みで迷走神経反射が起こるため"],
        "answer": 2,
        "explanation": "骨盤腔や後腹膜腔は広大なスペースがあり、静脈叢からの出血で数リットル単位の血液が貯留しうる。現場活動では、骨盤の動揺を確認（動揺痛検査）するのは愛護的観点から「1回のみ」または「省略」し、ショックの兆候があれば早期に骨盤固定を行うことが重要だ。（Kaibou.pdf p.129）",
        "reference": "Kaibou.pdf p.129"
    },
    {
        "id": 3,
        "level": 2,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "大腿骨骨幹部骨折において、周囲の筋組織への内出血により予想される出血量として、救急隊員が想定すべき目安はどれか？",
        "options": ["約100〜200mL", "約300〜500mL", "約1,000〜2,000mL", "約3,000mL以上"],
        "answer": 2,
        "explanation": "大腿部には太い筋肉と血管があり、骨折により周囲組織へ1,000mL〜2,000mL（循環血液量の約20〜40%）もの出血が起こりうる。外出血がなくても太ももの腫脹（腫れ）を確認した時点で、重篤なショックへ移行する準備（輸液の準備や病院選定）が必要だ。（Kaibou.pdf p.72）",
        "reference": "Kaibou.pdf p.72"
    },
    {
        "id": 4,
        "level": 2,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "長時間、倒壊家屋の下敷きになっていた傷病者を救出した。右下肢が長時間圧迫されていた場合、骨格筋の壊死によって血中に放出され、心停止の原因となりうる物質はどれか？",
        "options": ["カルシウムイオン", "カリウムイオン", "ナトリウムイオン", "グルコース"],
        "answer": 1,
        "explanation": "筋細胞が破壊されると、細胞内に多いカリウムが血中に大量放出され、高カリウム血症による不整脈（心停止）を引き起こす（クラッシュ症候群）。圧迫解除直後に容体が急変するリスクがあるため、心電図モニターの早期装着が必須である。（Kaibou.pdf p.59, 62）",
        "reference": "Kaibou.pdf p.59, 62"
    },
    {
        "id": 5,
        "level": 2,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "頸髄損傷が疑われる傷病者。自発呼吸が弱く、腹部のみがペコペコと動く「腹式呼吸」のみが観察された。この呼吸状態から推測される障害部位と機能残存している筋の組み合わせで正しいのはどれか？",
        "options": ["第4頸髄以上の損傷 - 横隔膜（横隔神経）の機能残存", "第7頸髄以下の損傷 - 肋間筋（肋間神経）の機能残存", "第5頸髄以下の損傷 - 横隔膜（横隔神経）の機能残存", "胸髄の損傷 - 腹直筋の機能残存"],
        "answer": 2,
        "explanation": "横隔神経はC3〜C5から出る。C5以下の損傷であれば横隔膜の機能は保たれるが、肋間筋（胸髄支配）が麻痺するため、胸郭が動かず腹部だけが動く呼吸となる。呼吸不全に陥りやすいため、補助換気の準備が必要である。（Kaibou.pdf p.103）",
        "reference": "Kaibou.pdf p.103"
    },
    {
        "id": 6,
        "level": 2,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "下腿部（ふくらはぎ）の骨折疑いで副木固定を行う際、確認すべき末梢動脈拍動の部位として、解剖学的に適切な組み合わせはどれか？",
        "options": ["大腿動脈と膝窩動脈", "後脛骨動脈と足背動脈", "橈骨動脈と尺骨動脈", "総頸動脈と鎖骨下動脈"],
        "answer": 1,
        "explanation": "膝から下の血流評価には、内果（内くるぶし）の後ろを通る「後脛骨動脈」と、足の甲を通る「足背動脈」を確認する。固定前後で脈拍の触知状況に変化がないか必ずチェックすること。（Kaibou.pdf p.109）",
        "reference": "Kaibou.pdf p.109"
    },
    {
        "id": 7,
        "level": 2,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "高齢者が転倒し、「足の付け根が痛くて立てない」と訴えている。患肢が「短縮」し「外旋（外側を向いている）」している場合、最も疑われる骨折部位はどこか？",
        "options": ["骨盤骨折", "大腿骨頸部骨折", "膝蓋骨骨折", "脛骨骨折"],
        "answer": 1,
        "explanation": "大腿骨頸部（または転子部）骨折の典型的な肢位である。腸腰筋などの筋肉に引っ張られて足が短くなり、重力と筋の作用で外側へ開く。無理に足をまっすぐにしようとせず、その肢位のまま愛護的に搬送する必要がある。（Kaibou.pdf p.73）",
        "reference": "Kaibou.pdf p.73"
    },
    {
        "id": 8,
        "level": 2,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "外傷による神経麻痺の評価において、デルマトーム（皮膚分節）の知識は重要である。「乳頭の高さ」の感覚が消失している場合、障害が疑われる脊髄レベルはどれか？",
        "options": ["C4", "Th4 (T4)", "Th10 (T10)", "L1"],
        "answer": 1,
        "explanation": "乳頭レベルはTh4、剣状突起はTh8、臍（へそ）はTh10、鼠径部はL1である。麻痺のレベル（高位）が時間経過とともに上がってくる場合は緊急性が高い。現場での麻痺レベル確認の指標として暗記しておくべき知識だ。（Kaibou.pdf p.86）",
        "reference": "Kaibou.pdf p.86"
    },
    {
        "id": 9,
        "level": 2,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "ショック体位（下肢挙上）をとらせる生理学的な根拠として、骨格筋系・静脈系の機能に関連するものはどれか？",
        "options": ["下肢の動脈圧を下げるため", "静脈弁の働きと重力を利用し、貯留した血液を心臓へ還流させるため", "骨格筋をリラックスさせて酸素消費量を減らすため", "腹圧を上げて大動脈の血流を良くするため"],
        "answer": 1,
        "explanation": "静脈は「容量血管」と呼ばれ血液の多くを貯留している。下肢を挙上することで、重力を利用して静脈還流量（前負荷）を増やし、心拍出量を維持するのが目的である。ただし、頭部外傷や心不全がある場合は禁忌となるので注意せよ。（Kaibou.pdf p.116）",
        "reference": "Kaibou.pdf p.116"
    },
    {
        "id": 10,
        "level": 2,
        "category": "anatomy",
        "subCategory": "musculoskeletal",
        "text": "関節の固定処置において、靱帯損傷（捻挫）か骨折か判別が難しい場合でも、原則として行うべき処置はどれか？",
        "options": ["疼痛が強いため、冷罨法のみ行い固定はしない", "関節を他動的に動かして、可動域を確認してから固定する", "骨折があるものとして、上下の関節を含めて固定する", "脱臼を整復してから固定する"],
        "answer": 2,
        "explanation": "現場で骨折か捻挫かを完全に区別することは困難である。したがって、「疑わしきは骨折として扱う」のが鉄則。患部の動揺を防ぐため、損傷部位の上下の関節を含めて固定し、二次損傷を防ぐ。（Kaibou.pdf p.153）",
        "reference": "Kaibou.pdf p.153"
    },
    {
        "id": 1,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "人間の体にある「神経」は、大きく2つのグループに分けられます。脳と脊髄からなる、体の司令塔チームを何という？",
        "options": ["末梢神経系", "中枢神経系", "自律神経系", "運動神経系"],
        "answer": 1,
        "explanation": "脳と脊髄は、体中の情報をまとめて判断を下す「中枢（ちゅうすう）」の役割をしています。これに対して、手足などに伸びているのが末梢神経です。（Kaibou.pdf [1]）",
        "reference": "Kaibou.pdf [1]"
    },
    {
        "id": 2,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "脳の中でも一番大きく、ものを考えたり、記憶したり、言葉を話したりする働きをしている部分はどこ？",
        "options": ["小脳（しょうのう）", "脳幹（のうかん）", "大脳（だいのう）", "脊髄（せきずい）"],
        "answer": 2,
        "explanation": "大脳は脳の大部分を占めていて、思考、記憶、感情、運動の命令など、人間らしい高度な働きを担っています。（Kaibou.pdf [2]）",
        "reference": "Kaibou.pdf [2]"
    },
    {
        "id": 3,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "自転車に乗ったり、平均台を渡ったりするときに重要な、体の「バランス」をとる役割をしている脳はどこ？",
        "options": ["大脳", "小脳", "間脳", "中脳"],
        "answer": 1,
        "explanation": "小脳は、運動の調節やバランス感覚（平衡感覚）を担当しています。ここがうまく働かないと、スムーズに動けたり歩けたりできなくなります。（Kaibou.pdf [3]）",
        "reference": "Kaibou.pdf [3]"
    },
    {
        "id": 4,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "呼吸をしたり心臓を動かしたりと、生きるために絶対に必要な働きをコントロールしている、脳の奥の部分（幹）は何？",
        "options": ["脳幹（のうかん）", "大脳辺縁系", "前頭葉", "頭頂葉"],
        "answer": 0,
        "explanation": "脳幹（中脳・橋・延髄）には、呼吸や循環（心臓）の中枢があります。ここが傷つくと命にかかわるため、「生命維持の中枢」とも呼ばれます。（Kaibou.pdf [4]）",
        "reference": "Kaibou.pdf [4]"
    },
    {
        "id": 5,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "自分の意志とは関係なく、心臓や胃腸などを自動的にコントロールしている神経をまとめて何という？",
        "options": ["運動神経", "感覚神経", "自律神経", "脳神経"],
        "answer": 2,
        "explanation": "自律神経は、寝ている間も自動的に内臓を動かして体の環境を整えています。交感神経と副交感神経の2つがあります。（Kaibou.pdf [5]）",
        "reference": "Kaibou.pdf [5]"
    },
    {
        "id": 6,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "運動したり、緊張したり、興奮しているときに活発に働き、「闘うモード」にする自律神経はどっち？",
        "options": ["交感神経", "副交感神経", "三叉神経", "迷走神経"],
        "answer": 0,
        "explanation": "交感神経は「闘争か逃走か」の神経とも呼ばれ、心拍数を上げたり瞳孔を開いたりして、体を活動的な状態にします。（Kaibou.pdf [5]）",
        "reference": "Kaibou.pdf [5]"
    },
    {
        "id": 7,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "逆に、ご飯を食べてリラックスしているときや、眠っているときに活発になる「お休みモード」の自律神経は？",
        "options": ["交感神経", "副交感神経", "坐骨神経", "視神経"],
        "answer": 1,
        "explanation": "副交感神経は、体をリラックスさせ、消化を助けたり、休息を取らせたりしてエネルギーを蓄える働きをします。（Kaibou.pdf [5]）",
        "reference": "Kaibou.pdf [5]"
    },
    {
        "id": 8,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "熱い鍋に触った瞬間、考えずに手を引っ込めるような反応を「反射」といいます。このとき、信号はどこで折り返している？",
        "options": ["大脳まで行って戻る", "脊髄（せきずい）で折り返す", "心臓で折り返す", "筋肉で折り返す"],
        "answer": 1,
        "explanation": "危険から身を守るための反射（脊髄反射）は、大脳まで行って考える時間を節約するため、背骨の中にある脊髄で信号がＵターンして筋肉に命令を出します。（Kaibou.pdf [6]）",
        "reference": "Kaibou.pdf [6]"
    },
    {
        "id": 9,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "右側の大脳は、体のどちら側をコントロールしていることが多い？",
        "options": ["右半身", "左半身", "上半身", "下半身"],
        "answer": 1,
        "explanation": "神経の経路は首のあたり（延髄など）で左右が交差するため、右の脳は左半身を、左の脳は右半身をコントロールしています。（Kaibou.pdf [3], [7]）",
        "reference": "Kaibou.pdf [3], [7]"
    },
    {
        "id": 10,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "脳はとても柔らかい組織です。頭蓋骨の中で脳を守るために、脳が浸かっている液体の名前は？",
        "options": ["血液", "リンパ液", "脳脊髄液（ずいえき）", "消化液"],
        "answer": 2,
        "explanation": "脳と脊髄は「脳脊髄液（のうせきずいえき）」という無色透明な液体の中に浮かんでいて、衝撃から守られています。（Kaibou.pdf [8]）",
        "reference": "Kaibou.pdf [8]"
    },
    {
        "id": 11,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "脳から直接出ている神経（脳神経）は、全部で何ペアある？",
        "options": ["3ペア", "7ペア", "12ペア", "31ペア"],
        "answer": 2,
        "explanation": "脳神経は左右12対（ペア）あります。それぞれ視覚、嗅覚、顔の動きなどを担当しています。（Kaibou.pdf [9]）",
        "reference": "Kaibou.pdf [9]"
    },
    {
        "id": 12,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "背骨の中を通っている神経の束「脊髄」からは、体中に向かって何ペアの神経が出ている？",
        "options": ["12ペア", "20ペア", "31ペア", "50ペア"],
        "answer": 2,
        "explanation": "脊髄神経は、首、胸、腰、お尻の骨の間から左右に出ており、合計で31対（ペア）あります。（Kaibou.pdf [10]）",
        "reference": "Kaibou.pdf [10]"
    },
    {
        "id": 13,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "ものを見るために、目から脳へ情報を送っている神経の名前は？",
        "options": ["嗅神経（きゅうしんけい）", "視神経（ししんけい）", "聴神経（ちょうしんけい）", "顔面神経"],
        "answer": 1,
        "explanation": "網膜に映った光の信号を脳に伝えるのが「視神経」です。（Kaibou.pdf [9]）",
        "reference": "Kaibou.pdf [9]"
    },
    {
        "id": 14,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "顔の表情を作ったり、笑顔を作ったりするために筋肉を動かしている神経は？",
        "options": ["三叉神経", "視神経", "顔面神経", "迷走神経"],
        "answer": 2,
        "explanation": "「顔面神経」は表情筋を動かす神経です。これが麻痺すると、顔が動かしにくくなったり、目が閉じられなくなったりします。（Kaibou.pdf [11]）",
        "reference": "Kaibou.pdf [11]"
    },
    {
        "id": 15,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "脳神経の中で一番分布範囲が広く、お腹の内臓（胃や腸）まで伸びて働きを調整している神経は？",
        "options": ["迷走神経（めいそうしんけい）", "舌下神経", "副神経", "動眼神経"],
        "answer": 0,
        "explanation": "「迷走神経」は脳から出て首を通り、胸や腹部の内臓にまで達する長い神経で、副交感神経として内臓の働きを調整します。（Kaibou.pdf [12]）",
        "reference": "Kaibou.pdf [12]"
    },
    {
        "id": 16,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "暗い場所に行ったり、驚いたりしたとき、目の「瞳孔（ひとみ）」はどうなる？",
        "options": ["小さくなる（縮瞳）", "大きくなる（散瞳）", "四角くなる", "変化しない"],
        "answer": 1,
        "explanation": "暗い場所で光を多く取り入れたり、興奮して交感神経が働くと、瞳孔は大きく開きます（散瞳）。（Kaibou.pdf [13], [14]）",
        "reference": "Kaibou.pdf [13], [14]"
    },
    {
        "id": 17,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "脳の細胞（ニューロン）同士がつながって情報をやり取りしている「つなぎ目」の部分を何という？",
        "options": ["シナプス", "カプセル", "バッテリー", "アンテナ"],
        "answer": 0,
        "explanation": "神経細胞同士の接合部は「シナプス」と呼ばれます。ここで化学物質を出して、次の細胞へ信号を伝えます。（Kaibou.pdf [15]）",
        "reference": "Kaibou.pdf [15]"
    },
    {
        "id": 18,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "脳梗塞などで、言葉がうまく話せなくなったり理解できなくなったりする症状を何という？",
        "options": ["失語症（しつごしょう）", "健忘症", "不眠症", "認知症"],
        "answer": 0,
        "explanation": "大脳にある言語中枢（ブローカ野やウェルニッケ野）が傷つくと、言葉が出てこなくなったり、言葉の意味が分からなくなったりする「失語症」になります。（Kaibou.pdf [16]）",
        "reference": "Kaibou.pdf [16]"
    },
    {
        "id": 19,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "内臓の働きを調節する自律神経の司令塔で、体温調節や食欲などもコントロールしている脳の場所は？",
        "options": ["視床下部（ししょうかぶ）", "小脳", "脊髄", "海馬"],
        "answer": 0,
        "explanation": "間脳にある「視床下部」は、自律神経やホルモンの総元締めで、体温、食欲、睡眠などを調節し、体の環境を一定に保っています。（Kaibou.pdf [3]）",
        "reference": "Kaibou.pdf [3]"
    },
    {
        "id": 20,
        "level": 1,
        "category": "anatomy",
        "subCategory": "nervous",
        "text": "お医者さんが患者さんの足の裏を棒でこすったり、膝を叩いたりするのは何を見ている？",
        "options": ["くすぐったいか確認している", "骨の硬さを調べている", "神経の反射が正常か見ている", "筋肉の量を測っている"],
        "answer": 2,
        "explanation": "膝を叩くと足が勝手に跳ね上がる「膝蓋腱反射」などの反射を見ることで、神経の経路が正常につながっているかを確認しています。（Kaibou.pdf [6]）",
        "reference": "Kaibou.pdf [6]"
    },
      {
    "id": 1,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血液を全身に送り出す、強力なポンプのような役割をしている臓器はどれかな？",
    "options": ["胃", "心臓", "肝臓", "肺"],
    "answer": 1,
    "explanation": "正解は「心臓」だよ。心臓は、一生休むことなく「ドクンドクン」と動いて、血液を体のすみずみまで届けてくれるんだ。（Kaibou.pdf p.108, p.110）",
    "reference": "Kaibou.pdf p.108, p.110"
  },
  {
    "id": 2,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓の中には、血液を貯めたり送り出したりするための「お部屋」がいくつあるかな？",
    "options": ["1つ", "2つ", "3つ", "4つ"],
    "answer": 3,
    "explanation": "正解は「4つ」だよ。右と左にそれぞれ2つずつ（心房と心室といいます）あって、4つの部屋が協力して血液を回しているんだ。（Kaibou.pdf p.110）",
    "reference": "Kaibou.pdf p.110"
  },
  {
    "id": 3,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "体の中を流れている血液の量は、体重の何パーセントくらいだと思う？",
    "options": ["約8％", "約20％", "約50％", "約80％"],
    "answer": 0,
    "explanation": "正解は「約8％」だよ。例えば体重60kgの人なら、だいたい5リットルくらいの血液が体の中を流れているんだね。（Kaibou.pdf p.108）",
    "reference": "Kaibou.pdf p.108"
  },
  {
    "id": 4,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血液の成分の中で、酸素を運ぶ役割をしているのはどれかな？",
    "options": ["赤血球", "白血球", "血小板", "血漿"],
    "answer": 0,
    "explanation": "正解は「赤血球」だよ。赤血球の中にあるヘモグロビンという物質が、酸素とくっついて全身に運んでくれるんだ。血液が赤いのもこのおかげなんだよ。（Kaibou.pdf p.143, p.144）",
    "reference": "Kaibou.pdf p.143, p.144"
  },
  {
    "id": 5,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "体の中にバイキン（細菌やウイルス）が入ってきたとき、それと戦って体を守ってくれるのはどれかな？",
    "options": ["赤血球", "白血球", "血小板", "鉄分"],
    "answer": 1,
    "explanation": "正解は「白血球」だよ。白血球は「体のパトロール隊」のような存在で、悪いバイキンをやっつけて病気から守ってくれるんだ。（Kaibou.pdf p.144, p.146）",
    "reference": "Kaibou.pdf p.144, p.146"
  },
  {
    "id": 6,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "ケガをして血が出たとき、その傷口で血を固めて止めてくれるのはどれかな？",
    "options": ["赤血球", "白血球", "血小板", "リンパ液"],
    "answer": 2,
    "explanation": "正解は「血小板」だよ。血小板は、血管が破れた場所に集まって「フタ」をしてくれる、頼もしい修理屋さんなんだ。（Kaibou.pdf p.144, p.146）",
    "reference": "Kaibou.pdf p.144, p.146"
  },
  {
    "id": 7,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓から送り出される、勢いが強くて酸素がたっぷりな血液を何と呼ぶかな？",
    "options": ["動脈血（どうみゃくけつ）", "静脈血（じょうみゃくけつ）", "鼻血", "リンパ液"],
    "answer": 0,
    "explanation": "正解は「動脈血」だよ。酸素をたくさん含んでいるので、とても鮮やかな赤色をしているんだ。（Kaibou.pdf p.109）",
    "reference": "Kaibou.pdf p.109"
  },
  {
    "id": 8,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血管の中で一番細くて、体の細胞一つひとつに栄養や酸素を届けているのはどれかな？",
    "options": ["大動脈", "大静脈", "毛細血管", "リンパ管"],
    "answer": 2,
    "explanation": "正解は「毛細血管」だよ。髪の毛よりもずっと細い血管が網の目のように広がっていて、そこで栄養のやり取りが行われているんだ。（Kaibou.pdf p.116）",
    "reference": "Kaibou.pdf p.116"
  },
  {
    "id": 9,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "手首や首のあたりを触ると「ドクンドクン」と感じるものがあるよね。これを何と呼ぶかな？",
    "options": ["血圧", "脈拍（みゃくはく）", "呼吸", "反射"],
    "answer": 1,
    "explanation": "正解は「脈拍」だよ。心臓が血液を押し出すたびに、血管がピクピク動くのを肌の上から感じることができるんだ。（Kaibou.pdf p.109）",
    "reference": "Kaibou.pdf p.109"
  },
  {
    "id": 10,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓の中で、血液が逆流（逆戻り）しないように付いている、ドアのような役割のものは何かな？",
    "options": ["筋肉", "神経", "弁（べん）", "骨"],
    "answer": 2,
    "explanation": "正解は「弁」だよ。心臓には4つの弁があって、血液が正しい方向にだけ流れるように、タイミングよく開いたり閉じたりしているんだ。（Kaibou.pdf p.111）",
    "reference": "Kaibou.pdf p.111"
  },
  {
    "id": 11,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血液が心臓を出て、全身を回ってまた心臓に戻ってくるまで、だいたいどれくらいの時間がかかるかな？",
    "options": ["約1分", "約10分", "約1時間", "約1日"],
    "answer": 0,
    "explanation": "正解は「約1分」だよ。人間の血液は、たった1分で全身を一周しちゃうんだ。心臓のポンプはとっても速くて力強いんだね。（Kaibou.pdf p.108）",
    "reference": "Kaibou.pdf p.108"
  },
  {
    "id": 12,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓から全身に送られる「動脈」と、心臓に戻ってくる「静脈」。壁が厚くて丈夫なのはどっちかな？",
    "options": ["動脈", "静脈", "どちらも同じ", "どちらも薄い"],
    "answer": 0,
    "explanation": "正解は「動脈」だよ。心臓が強く血液を押し出す高い圧力（血圧）に耐えられるように、動脈の壁は静脈よりも厚くできているんだ。（Kaibou.pdf p.115）",
    "reference": "Kaibou.pdf p.115"
  },
  {
    "id": 13,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓の「ドクン、ドクン」という音。この音の正体は何かな？",
    "options": ["血液が流れる音", "心臓の弁が閉まる音", "筋肉が伸びる音", "空気が入る音"],
    "answer": 1,
    "explanation": "正解は「心臓の弁が閉まる音」だよ。血液が逆戻りしないように弁が勢いよく閉まるときに、あの独特の音が鳴るんだね。（Kaibou.pdf p.113）",
    "reference": "Kaibou.pdf p.113"
  },
  {
    "id": 14,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血液が心臓に戻る「静脈」の中には、動脈にはない特別な仕組みがあるよ。それは何？",
    "options": ["小さな心臓", "酸素の工場", "逆流を防ぐための「弁」", "赤血球を増やす場所"],
    "answer": 2,
    "explanation": "正解は「逆流を防ぐための弁」だよ。静脈は心臓へ戻る力が弱いし、足から上へ運ぶときは重力に逆らわないといけないから、血液が戻らないように弁が付いているんだ。（Kaibou.pdf p.116）",
    "reference": "Kaibou.pdf p.116"
  },
  {
    "id": 15,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "酸素を使い終わって心臓に戻る、少し黒っぽい赤色の血液を何と呼ぶかな？",
    "options": ["動脈血", "静脈血", "きれいな血", "悪い血"],
    "answer": 1,
    "explanation": "正解は「静脈血」だよ。全身の細胞に酸素を届け終わって、代わりに二酸化炭素をたくさん含んでいるので、少し暗い色をしているんだ。（Kaibou.pdf p.109）",
    "reference": "Kaibou.pdf p.109"
  },
  {
    "id": 16,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓を動かしている筋肉は、自分の意志で「今だけ止めよう！」と止めることができるかな？",
    "options": ["できる", "できない", "寝ている時だけできる", "練習すればできる"],
    "answer": 1,
    "explanation": "正解は「できない」だよ。心臓の筋肉（心筋）は、私たちの意志とは関係なく、自律神経などが自動で動かしてくれている「不随意筋（ふずいいきん）」なんだ。（Kaibou.pdf p.111）",
    "reference": "Kaibou.pdf p.111"
  },
  {
    "id": 17,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血液の半分以上を占める、薄い黄色をした液体の部分を何というかな？",
    "options": ["血清（けっせい）", "血漿（けっしょう）", "リンパ液", "胃液"],
    "answer": 1,
    "explanation": "正解は「血漿（けっしょう）」だよ。この液体が、栄養分やホルモン、体の中に出たゴミ（老廃物）を運ぶ役割をしているんだ。（Kaibou.pdf p.143, p.144）",
    "reference": "Kaibou.pdf p.143, p.144"
  },
  {
    "id": 18,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "走ったり階段を登ったりすると心臓がドキドキ速くなるのはなぜ？",
    "options": ["心臓が疲れて叫んでいるから", "筋肉がもっとたくさんの酸素を欲しがるから", "お腹が空くのを防ぐため", "体を冷やすため"],
    "answer": 1,
    "explanation": "正解は「筋肉がたくさんの酸素を欲しがるから」だよ。運動すると筋肉がエネルギーをたくさん使うので、血液を速く回して酸素をたくさん届けようとしているんだね。（Kaibou.pdf p.117）",
    "reference": "Kaibou.pdf p.117"
  },
  {
    "id": 19,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "足の血液が重力に逆らって心臓に戻るのを助けるため、「第二の心臓」と呼ばれているのは体のどこの筋肉？",
    "options": ["腕の筋肉", "腹筋", "ふくらはぎの筋肉", "背中の筋肉"],
    "answer": 2,
    "explanation": "正解は「ふくらはぎの筋肉」だよ。歩くときに筋肉が縮んだり伸びたりすることで、近くの静脈をギューッと押して、血液を上へ押し上げてくれるんだ。（Kaibou.pdf p.116）",
    "reference": "Kaibou.pdf p.116"
  },
  {
    "id": 20,
    "level": 1,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓から出た血液は、どこに行くと「酸素」を新しく受け取ることができるかな？",
    "options": ["胃", "脳", "肺", "腎臓"],
    "answer": 2,
    "explanation": "正解は「肺」だよ。心臓から送り出された血液は、肺に行って呼吸で吸い込んだ新しい酸素をもらい、二酸化炭素を捨ててからまた心臓に戻ってくるんだよ。（Kaibou.pdf p.108, p.109）",
    "reference": "Kaibou.pdf p.108, p.109"
  },
  {
    "id": 1,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "私たちが息を吸うとき、体に取り入れている一番大切なものは何かな？",
    "options": ["二酸化炭素", "水素", "酸素", "窒素"],
    "answer": 2,
    "explanation": "正解は「酸素」だよ。体の中でエネルギーを作るために、酸素は欠かせないんだ。吐くときには、いらなくなった「二酸化炭素」を出しているんだよ。(Kaibou.pdf p.97)",
    "reference": "Kaibou.pdf p.97"
  },
  {
    "id": 2,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "口ではなく「鼻」で息を吸うことのメリットとして、正しいものはどれかな？",
    "options": ["空気を冷やして吸い込める", "空気に湿り気と温かさを与えられる", "酸素を2倍に増やせる", "息を止めるのが楽になる"],
    "answer": 1,
    "explanation": "正解は「空気に湿り気と温かさを与えられる」だよ。鼻を通ることで、冷たくて乾いた空気が喉や肺に優しい状態に調整されるんだ。(Kaibou.pdf p.99, p.101)",
    "reference": "Kaibou.pdf p.99, p.101"
  },
  {
    "id": 3,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "飲み物を飲んだとき、間違って肺に入らないように「ふた」をしてくれる場所はどこ？",
    "options": ["口蓋垂（のどちんこ）", "喉頭蓋（こうとうがい）", "のど仏", "食道"],
    "answer": 1,
    "explanation": "正解は「喉頭蓋（こうとうがい）」だよ。飲み込む瞬間に、このふたがパタンと閉まって、空気の通り道をふさいでくれるんだ。これがうまくいかないと「むせる」んだね。(Kaibou.pdf p.100)",
    "reference": "Kaibou.pdf p.100"
  },
  {
    "id": 4,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "男性によく見える「のど仏」。この中にある、声を出すための装置は何かな？",
    "options": ["声帯（せいたい）", "肺胞", "舌", "扁桃腺"],
    "answer": 0,
    "explanation": "正解は「声帯」だよ。のど仏（甲状軟骨）の内側には声帯があって、そこが震えることで声が出るんだよ。(Kaibou.pdf p.100)",
    "reference": "Kaibou.pdf p.100"
  },
  {
    "id": 5,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "胸とお腹の境目にあって、上下に動くことで肺に空気を出し入れする大きな筋肉は？",
    "options": ["腹筋", "背筋", "横隔膜（おうかくまく）", "大胸筋"],
    "answer": 2,
    "explanation": "正解は「横隔膜（おうかくまく）」だよ。これが下がると胸の中が広がって、空気が入ってくるんだ。しゃっくりはこの筋肉がけいれんして起こるんだよ。(Kaibou.pdf p.103)",
    "reference": "Kaibou.pdf p.103"
  },
  {
    "id": 6,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺の一番奥にある、ブドウの房のような形をした小さな袋の名前は何？",
    "options": ["肺胞（はいほう）", "気管支", "心房", "リンパ節"],
    "answer": 0,
    "explanation": "正解は「肺胞（はいほう）」だよ。この小さな袋のまわりには血管がびっしりあって、そこで酸素と二酸化炭素の交換が行われているんだ。(Kaibou.pdf p.104)",
    "reference": "Kaibou.pdf p.104"
  },
  {
    "id": 7,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "人間の肺は左右にありますが、形が少し違うよ。左の肺が少し小さいのはなぜかな？",
    "options": ["右利きが多いから", "左側に心臓があるから", "胃が左側にあるから", "左側は空気があまり入らないから"],
    "answer": 1,
    "explanation": "正解は「左側に心臓があるから」だよ。心臓が少し左側に寄っているから、その分だけ左の肺は少し場所を譲っているんだね。(Kaibou.pdf p.103)",
    "reference": "Kaibou.pdf p.103"
  },
  {
    "id": 8,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺にある小さな袋（肺胞）を全部広げると、どのくらいの広さになるかな？",
    "options": ["新聞紙1枚分", "畳10枚分", "テニスコート半分〜1面分", "サッカー場1面分"],
    "answer": 2,
    "explanation": "正解は「テニスコート半分〜1面分」だよ。小さな肺の中に、これほど広い面積が折りたたまれているから、効率よく酸素を取り込めるんだね。(Kaibou.pdf p.104)",
    "reference": "Kaibou.pdf p.104"
  },
  {
    "id": 9,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "寝ている間も勝手に呼吸が続くのは、どこの場所が命令を出しているから？",
    "options": ["心臓", "肺そのもの", "脳（呼吸中枢）", "胃"],
    "answer": 2,
    "explanation": "正解は「脳（呼吸中枢）」だよ。脳にある「延髄（えんずい）」という場所が、酸素や二酸化炭素の量をチェックして、自動で呼吸をコントロールしているんだ。(Kaibou.pdf p.107)",
    "reference": "Kaibou.pdf p.107"
  },
  {
    "id": 10,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "気管の中にある、入ってきたゴミを外へ追い出そうとする細かい毛の名前は？",
    "options": ["うぶ毛", "線毛（せんもう）", "鼻毛", "まつ毛"],
    "answer": 1,
    "explanation": "正解は「線毛（せんもう）」だよ。この毛がほうきのように動いて、ゴミやバイキンを外へ運んでくれるんだ。タバコを吸うとこの動きが悪くなっちゃうよ。(Kaibou.pdf p.101)",
    "reference": "Kaibou.pdf p.101"
  },
  {
    "id": 11,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "喉の奥で、鼻からの通り道と口からの通り道が合流する場所の名前は？",
    "options": ["咽頭（いんとう）", "喉頭（こうとう）", "気管", "食道"],
    "answer": 0,
    "explanation": "正解は「咽頭（いんとう）」だよ。ここは空気も食べ物も通る共通の道なんだ。そのさらに奥で、空気は気管へ、食べ物は食道へと分かれるよ。(Kaibou.pdf p.99)",
    "reference": "Kaibou.pdf p.99"
  },
  {
    "id": 12,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "空気の通り道である「気管」が、掃除機のホースのようにつぶれないようになっているのはなぜ？",
    "options": ["骨が入っているから", "筋肉で固めているから", "軟骨のリングで支えられているから", "空気圧が高いから"],
    "answer": 2,
    "explanation": "正解は「軟骨のリングで支えられているから」だよ。U字型の軟骨がつながって、トンネルのように通り道をしっかりキープしているんだ。(Kaibou.pdf p.100)",
    "reference": "Kaibou.pdf p.100"
  },
  {
    "id": 13,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺を囲んでいる「あばら骨（肋骨）」の大切な役割は何かな？",
    "options": ["酸素を作る", "心臓や肺をガードする", "声を大きくする", "食べ物を消化する"],
    "answer": 1,
    "explanation": "正解は「心臓や肺をガードする」だよ。大事な臓器が傷つかないように、カゴのように囲んで守っているんだね。呼吸のときには動いて肺を広げる助けもするよ。(Kaibou.pdf p.102)",
    "reference": "Kaibou.pdf p.102"
  },
  {
    "id": 14,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "赤ちゃんや小さな子供の呼吸の特徴として、正しいものはどれ？",
    "options": ["大人より空気の通り道が広い", "大人より空気の通り道が狭くて詰まりやすい", "鼻で息をすることができない", "肺の数が大人より多い"],
    "answer": 1,
    "explanation": "正解は「大人より空気の通り道が狭くて詰まりやすい」だよ。子供はもともと道が狭いから、少し腫れたりゴミが入ったりするだけで息苦しくなりやすいんだ。(Kaibou.pdf p.101)",
    "reference": "Kaibou.pdf p.101"
  },
  {
    "id": 15,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "私たちが息を吐くとき、吸ったときよりも増えているガスは何かな？",
    "options": ["酸素", "二酸化炭素", "水素", "アルゴン"],
    "answer": 1,
    "explanation": "正解は「二酸化炭素」だよ。体の中で燃やされたエネルギーのカスが、二酸化炭素として肺から出ていくんだ。(Kaibou.pdf p.105)",
    "reference": "Kaibou.pdf p.105"
  },
  {
    "id": 16,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺自体には筋肉がないけれど、どうやって膨らんだり縮んだりしているの？",
    "options": ["肺が自分で頑張る", "周りの筋肉（横隔膜など）が動かしてくれる", "心臓が押してくれる", "空気が勝手に入ってくる"],
    "answer": 1,
    "explanation": "正解は「周りの筋肉（横隔膜など）が動かしてくれる」だよ。胸の中のスペースが広がると、肺が引っ張られて膨らむという仕組みなんだ。(Kaibou.pdf p.103)",
    "reference": "Kaibou.pdf p.103"
  },
  {
    "id": 17,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺の表面を覆っている、摩擦を防ぐための薄い膜を何という？",
    "options": ["腹膜", "胸膜（きょうまく）", "骨膜", "粘膜"],
    "answer": 1,
    "explanation": "正解は「胸膜（きょうまく）」だよ。肺と胸の壁の間に少しだけ液体があって、滑りやすくすることでスムーズに呼吸ができるようになっているんだ。(Kaibou.pdf p.102)",
    "reference": "Kaibou.pdf p.102"
  },
  {
    "id": 18,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "運動した後に息が切れるのはなぜ？",
    "options": ["脳が疲れたから", "筋肉がたくさんの酸素を欲しがっているから", "お腹が空いたから", "喉が渇いたから"],
    "answer": 1,
    "explanation": "正解は「筋肉がたくさんの酸素を欲しがっているから」だよ。激しく動くとエネルギーがたくさん必要で、その分たくさんの酸素を運ばなきゃいけないから、呼吸が速くなるんだ。(Kaibou.pdf p.107)",
    "reference": "Kaibou.pdf p.107"
  },
  {
    "id": 19,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺の中で酸素を受け取った血液は、このあとどこへ行く？",
    "options": ["脳へ直接行く", "一度心臓に戻る", "すぐ筋肉へ行く", "胃へ行く"],
    "answer": 1,
    "explanation": "正解は「一度心臓に戻る」だよ。肺でリフレッシュした血液は、心臓というポンプに戻ってから、全身へ力強く送り出されるんだ。(Kaibou.pdf p.95)",
    "reference": "Kaibou.pdf p.95"
  },
  {
    "id": 20,
    "level": 1,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "喉のあたりで、空気の通り道（気管）は「前」と「後ろ」どちらにあるかな？",
    "options": ["前（のど側）", "後ろ（背中側）", "右側", "左側"],
    "answer": 0,
    "explanation": "正解は「前（のど側）」だよ。気管は前側に、食べ物が通る「食道」はそのすぐ後ろにあるんだ。のど仏を触ると、そこが空気の入り口だとわかるね。(Kaibou.pdf p.100)",
    "reference": "Kaibou.pdf p.100"
  },
  {
    "id": 1,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "私たちの体にある「腎臓（じんぞう）」は、どんな形に似ていると言われているかな？",
    "options": ["りんご", "バナナ", "そら豆", "星形"],
    "answer": 2,
    "explanation": "腎臓は、左右に1つずつあって「そら豆」のような形をしています。大きさはだいたい自分の握り拳（にぎりこぶし）くらいなんだよ。[1]",
    "reference": "Kaibou.pdf [1]"
  },
  {
    "id": 2,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "「腎臓」の主な役割は、体の中の何をきれいにすることかな？",
    "options": ["空気", "血液", "食べ物", "骨"],
    "answer": 1,
    "explanation": "腎臓は「血液のろ過工場」のような場所なんだ。体の中を流れる血液から、いらなくなったゴミや余分な水分を取り除いて、おしっこ（尿）を作ってくれるよ。[2, 3]",
    "reference": "Kaibou.pdf [2, 3]"
  },
  {
    "id": 3,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "健康な大人が1日に出すおしっこの量は、だいたいどれくらいかな？",
    "options": ["コップ1杯分（0.2L）", "ペットボトル3本分くらい（1.5L）", "バケツ1杯分（10L）", "お風呂1杯分（200L）"],
    "answer": 1,
    "explanation": "個人差はあるけれど、だいたい1日に1.5リットル前後のおしっこを出すのが一般的だよ。体の中の水分バランスを保つために、腎臓が量を調節してくれているんだね。[4]",
    "reference": "Kaibou.pdf [4]"
  },
  {
    "id": 4,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "作られたおしっこを、出すまで一時的に溜めておく「袋」のような臓器はどこ？",
    "options": ["胃", "肝臓", "膀胱（ぼうこう）", "肺"],
    "answer": 2,
    "explanation": "おしっこは「膀胱（ぼうこう）」という袋に溜められるんだ。ある程度たまると、脳に「おしっこに行きたい！」という信号が送られるよ。[5]",
    "reference": "Kaibou.pdf [5]"
  },
  {
    "id": 5,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓は、体のどのあたりにあるかな？",
    "options": ["胸の真ん中", "おへそのすぐ下", "背中側の腰の少し上", "太ももの付け根"],
    "answer": 2,
    "explanation": "腎臓は背骨の左右に1つずつ、背中側の腰より少し上のあたりにあるんだ。大切な臓器だから、脂肪や背中の筋肉で守られているよ。[1]",
    "reference": "Kaibou.pdf [1]"
  },
  {
    "id": 6,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓でおしっこが作られたあと、膀胱まで運ぶ「管（くだ）」の名前は何？",
    "options": ["尿管（にょうかん）", "血管", "食道", "気管"],
    "answer": 0,
    "explanation": "腎臓と膀胱をつなぐ細い管を「尿管（にょうかん）」と呼ぶよ。筋肉の動きを使って、おしっこを膀胱へと送り出しているんだ。[5]",
    "reference": "Kaibou.pdf [5]"
  },
  {
    "id": 7,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "膀胱に溜まったおしっこを、体の外へ出すための「最後の出口の管」は何？",
    "options": ["尿管", "尿道（にょうどう）", "血管", "大腸"],
    "answer": 1,
    "explanation": "おしっこの出口になる管は「尿道（にょうどう）」だよ。男性と女性では、この管の長さがかなり違うのが特徴なんだ。[6]",
    "reference": "Kaibou.pdf [6]"
  },
  {
    "id": 8,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "暑い日にたくさん汗をかくと、おしっこの量や色は普通どうなるかな？",
    "options": ["量は増えて、色は薄くなる", "量は減って、色は濃くなる", "量は変わらず、色は真っ赤になる", "おしっこは全く出なくなる"],
    "answer": 1,
    "explanation": "汗で水分が体の外に出ると、腎臓は「体の水が足りない！」と判断して、おしっこの量を減らし、成分を濃くして水分を節約しようとするんだよ。[4]",
    "reference": "Kaibou.pdf [4]"
  },
  {
    "id": 9,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "尿道の長さについて、正しいのはどれかな？",
    "options": ["男性の方が長い", "女性の方が長い", "どちらも同じ長さ", "長さは決まっていない"],
    "answer": 0,
    "explanation": "男性の尿道は16〜18cmくらいあるけれど、女性は3〜4cmとかなり短いんだ。女性の方がバイキンが入りやすく、膀胱炎になりやすいのはこのためなんだよ。[6]",
    "reference": "Kaibou.pdf [6]"
  },
  {
    "id": 10,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓には、どれくらいの血液が流れているかな？",
    "options": ["ほとんど流れていない", "心臓が出す血液の約4分の1", "体の血液の全部が常に留まっている", "指先と同じくらい"],
    "answer": 1,
    "explanation": "腎臓は血液をきれいにする仕事をしているから、とてもたくさんの血液が流れ込んでいるんだ。1分間に1リットル以上の血液が掃除されているんだよ。[3]",
    "reference": "Kaibou.pdf [3]"
  },
  {
    "id": 11,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "おしっこを我慢したり、自分のタイミングで出したりできるのはなぜ？",
    "options": ["胃が止めているから", "出口に筋肉の「蛇口（じゃぐち）」があるから", "骨でおさえているから", "腎臓が止まるから"],
    "answer": 1,
    "explanation": "尿道の周りには「括約筋（かつやくきん）」という筋肉があって、自分の意志で締めたり緩めたりできるから、おしっこをコントロールできるんだ。[5]",
    "reference": "Kaibou.pdf [5]"
  },
  {
    "id": 12,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "血液をきれいにする腎臓の最小単位（お掃除ユニット）の名前を何と言う？",
    "options": ["ネフロン", "ニューロン", "ビタミン", "ホルモン"],
    "answer": 0,
    "explanation": "腎臓の中には「ネフロン」という小さな装置が、片方の腎臓に約100万個もあるんだ。ここで血液がろ過されておしっこができるんだよ。[7]",
    "reference": "Kaibou.pdf [7]"
  },
  {
    "id": 13,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓は、おしっこを作る以外にどんな仕事をしているかな？",
    "options": ["声を出すのを助ける", "血（赤血球）を作る命令を出す", "食べ物を噛み砕く", "髪の毛を伸ばす"],
    "answer": 1,
    "explanation": "腎臓はホルモンを出して、血液の成分である赤血球を作るように骨に命令したり、血圧を調節したりもしているんだよ。意外と多才だね！[3]",
    "reference": "Kaibou.pdf [3]"
  },
  {
    "id": 14,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "膀胱におしっこが溜まったとき、尿管へ戻らないようになっているのはなぜ？",
    "options": ["逆流を防ぐ弁のような仕組みがあるから", "おしっこが重いから", "尿管がとても長いから", "膀胱が吸い込んでいるから"],
    "answer": 0,
    "explanation": "尿管が膀胱につながる部分は、おしっこが逆戻りしないような特別な仕組みになっているんだ。これによって腎臓が守られているんだよ。[5]",
    "reference": "Kaibou.pdf [5]"
  },
  {
    "id": 15,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "おしっこの中に含まれている「いらないもの」の代表は何？",
    "options": ["酸素", "二酸化炭素", "アンモニアなどの老廃物", "ブドウ糖"],
    "answer": 2,
    "explanation": "体の中でタンパク質などが使われた後に出るゴミ（アンモニアなどが変わった尿素など）を、おしっこに混ぜて体の外へ捨てているんだ。[2, 3]",
    "reference": "Kaibou.pdf [2, 3]"
  },
  {
    "id": 16,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓が血液をろ過する際、普通は通さない（尿に混ぜない）大切なものはどれ？",
    "options": ["水", "塩分", "血液の粒（赤血球など）", "いらなくなったゴミ"],
    "answer": 2,
    "explanation": "元気な腎臓は、赤血球などの血液の粒や大切なタンパク質はろ過せずに体の中に残すんだ。これがおしっこに混ざると病気のサインになることもあるよ。[7]",
    "reference": "Kaibou.pdf [7]"
  },
  {
    "id": 17,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "おしっこを出す時、膀胱の筋肉はどうなっているかな？",
    "options": ["縮んでいる（収縮）", "伸びている（弛緩）", "固まっている", "消えている"],
    "answer": 0,
    "explanation": "おしっこを出す時は、膀胱の壁の筋肉がギュッと縮んで、中の尿を押し出しているんだよ。[4]",
    "reference": "Kaibou.pdf [4]"
  },
  {
    "id": 18,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "おしっこは、血液をろ過したあとの「残りカス」と言えるけれど、その大部分は何でできているかな？",
    "options": ["油", "砂糖", "水", "空気"],
    "answer": 2,
    "explanation": "おしっこの大部分は水分だよ。そこに体で使い終わったゴミや、余分な塩分などが溶け込んでいるんだ。[3]",
    "reference": "Kaibou.pdf [3]"
  },
  {
    "id": 19,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "左右にある腎臓のうち、右側が左側より少しだけ低い位置にあるのはなぜ？",
    "options": ["心臓が左にあるから", "右に大きな「肝臓」があるから", "右足が重いから", "わざとずらしてある"],
    "answer": 1,
    "explanation": "お腹の右側には、とても大きな「肝臓（かんぞう）」があるんだ。その肝臓に押されて、右の腎臓は左よりも少し低い位置にあるんだよ。[1]",
    "reference": "Kaibou.pdf [1]"
  },
  {
    "id": 20,
    "level": 1,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "体の水分のバランスを保つために、腎臓と協力して「おしっこの量を減らせ！」と命令を出す場所はどこ？",
    "options": ["脳", "心臓", "胃", "皮膚"],
    "answer": 0,
    "explanation": "脳（下垂体）から「抗利尿ホルモン」という命令が出て、腎臓におしっこの量を調節させているんだ。体はチームワークで動いているんだね。[4, 8]",
    "reference": "Kaibou.pdf [4, 8]"
  },
    {
    "id": 1,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "意識障害のある傷病者において、「目覚めやすさ（覚醒度）」を維持している中枢は脳のどの部位に存在するか？",
    "options": ["大脳皮質", "小脳", "脳幹網様体（上行性網様体賦活系）", "脊髄"],
    "answer": 2,
    "explanation": "意識の明瞭度（覚醒機能）は、脳幹（間脳・中脳・橋・延髄）にある「上行性網様体賦活系」が司っています。現場でJCSが低い（目覚めが悪い）場合、この脳幹レベルの機能不全を疑います。[1, 2]",
    "reference": "Kaibou.pdf [1, 2]"
  },
  {
    "id": 2,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "ショック状態で交感神経が極度に興奮している際、瞳孔の状態として想定されるのはどれか？",
    "options": ["縮瞳（瞳孔が小さくなる）", "散瞳（瞳孔が大きくなる）", "左右不同", "垂直偏視"],
    "answer": 1,
    "explanation": "交感神経が優位になると、瞳孔散大筋が収縮し「散瞳」します。緊急時やショック時、脳への血流維持のために生体が闘争態勢をとる反応の一つです。[3, 4]",
    "reference": "Kaibou.pdf [3, 4]"
  },
  {
    "id": 3,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳梗塞を疑う傷病者。「滑らかに話せるが、内容が支離滅裂で理解できない」という失語症。障害部位として疑われるのはどこか？",
    "options": ["前頭葉のブローカ中枢", "側頭葉のウェルニッケ中枢", "後頭葉の視覚野", "小脳"],
    "answer": 1,
    "explanation": "「滑らかだが理解できない」のは感覚性失語症で、側頭葉のウェルニッケ中枢の障害を疑います。構音障害（うまくしゃべれない）との区別が現場観察では重要です。[5]",
    "reference": "Kaibou.pdf [5]"
  },
  {
    "id": 4,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳灌流圧（CPP）を維持するための計算式として正しいものはどれか？",
    "options": ["CPP = 平均血圧 ＋ 頭蓋内圧", "CPP = 平均血圧 － 頭蓋内圧", "CPP = 収縮期血圧 － 拡張期血圧", "CPP = 心拍出量 × 血管抵抗"],
    "answer": 1,
    "explanation": "脳灌流圧は「平均血圧 － 頭蓋内圧（脳圧）」で求められます。頭蓋内圧が上昇（脳出血など）すると、脳血流を保つために生体は反射的に血圧を上昇させます（クッシング現象）。[6]",
    "reference": "Kaibou.pdf [6]"
  },
  {
    "id": 5,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "対光反射（瞳に光を入れると縮小する反応）において、情報の「入力（求心路）」を担う神経はどれか？",
    "options": ["動眼神経", "三叉神経", "視神経", "顔面神経"],
    "answer": 2,
    "explanation": "対光反射の入力（光を感じる）は「第II脳神経：視神経」が、出力（瞳を絞る）は「第III脳神経：動眼神経」が担います。脳幹機能の評価に不可欠な観察項目です。[7, 8]",
    "reference": "Kaibou.pdf [7, 8]"
  },
  {
    "id": 6,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "迷走神経（第X脳神経）の刺激によって生じる、循環器系への主な作用はどれか？",
    "options": ["心拍数の増加", "心拍数の減少・抑制", "血圧の急激な上昇", "心筋収縮力の増強"],
    "answer": 1,
    "explanation": "迷走神経は強力な副交感神経であり、心拍数を抑制し減少させます。現場で激しい痛みや怒責によって迷走神経反射が起きると、徐脈と血圧低下による失神を招くことがあります。[9-11]",
    "reference": "Kaibou.pdf [9-11]"
  },
  {
    "id": 7,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脊髄損傷を疑う傷病者。「乳頭の高さ」付近まで感覚が消失している場合、障害部位（高位）の目安はどれか？",
    "options": ["第4頸髄 (C4)", "第4胸髄 (Th4)", "第10胸髄 (Th10)", "第1腰髄 (L1)"],
    "answer": 1,
    "explanation": "デルマトーム（皮膚分節）において、乳頭の高さは「Th4」です。臍（へそ）はTh10です。損傷高位の判定は、麻痺の進行を確認するために重要です。[12]",
    "reference": "Kaibou.pdf [12]"
  },
  {
    "id": 8,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "「闘争か逃走か」といわれる、緊急時に血圧上昇や心拍数増加を引き起こす神経伝達物質（交感神経末端）はどれか？",
    "options": ["アセチルコリン", "ノルアドレナリン", "ドパミン", "セロトニン"],
    "answer": 1,
    "explanation": "交感神経の末端（シナプス）では「ノルアドレナリン」が放出され、効果器に作用します。副交感神経末端はアセチルコリンです。[13, 14]",
    "reference": "Kaibou.pdf [13, 14]"
  },
  {
    "id": 9,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳卒中を疑う傷病者。共同偏視（目が一方に寄る）がみられる場合、一般的に視線はどこを向くか？",
    "options": ["麻痺している側", "病巣（脳の損傷がある）側", "真上", "常に交互に動く"],
    "answer": 1,
    "explanation": "脳出血や脳梗塞では、多くの場合、視線は「病巣側（損傷した脳の側）」を向きます。これを「病巣を睨む」と表現します。現場での重要な病態判断材料です。[3, 13]",
    "reference": "Kaibou.pdf [3, 13]"
  },
  {
    "id": 10,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "体温調節や食欲、水分摂取などの自律神経の最高中枢がある部位はどこか？",
    "options": ["視床下部", "大脳基底核", "小脳半球", "延髄"],
    "answer": 0,
    "explanation": "間脳の「視床下部」は、自律神経やホルモンの司令塔であり、体温調節や食欲、口渇（水分摂取）などを司っています。ここが障害されると、生命維持の恒常性が崩れます。[15]",
    "reference": "Kaibou.pdf [15]"
  },
  {
    "id": 11,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳脊髄液（髄液）が産生される場所はどこか？",
    "options": ["くも膜顆粒", "脳室内の脈絡叢", "硬膜下腔", "脊髄前角"],
    "answer": 1,
    "explanation": "髄液は各脳室内にある「脈絡叢（みゃくらくそう）」で産生され、最終的にくも膜顆粒から静脈へ吸収されます。頭部外傷での髄液漏は重篤な兆候です。[16]",
    "reference": "Kaibou.pdf [16]"
  },
  {
    "id": 12,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "外傷で「硬膜」の血管（中硬膜動脈など）が損傷した際に、頭蓋骨と硬膜の間に血液が溜まる病態はどれか？",
    "options": ["急性硬膜下血腫", "急性硬膜外血腫", "くも膜下出血", "脳内出血"],
    "answer": 1,
    "explanation": "頭蓋骨と強靭な硬膜の間に血腫ができるのが「硬膜外血腫」です。受傷直後は意識が清明（意識清明期：ルシッドインターバル）な場合があり、注意が必要です。[17]",
    "reference": "Kaibou.pdf [17]"
  },
  {
    "id": 13,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "中枢神経系を包む髄膜のうち、最も内側にあり脳の表面を密に覆っている膜はどれか？",
    "options": ["硬膜", "くも膜", "軟膜", "筋膜"],
    "answer": 2,
    "explanation": "髄膜は外側から硬膜、くも膜、軟膜の3層構造です。脳の表面に密着しているのは「軟膜」です。[17]",
    "reference": "Kaibou.pdf [17]"
  },
  {
    "id": 14,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "自転車に乗る際のバランス保持など、身体の平衡と運動の制御を主に行っている脳の部位はどれか？",
    "options": ["大脳基底核", "小脳", "橋", "側頭葉"],
    "answer": 1,
    "explanation": "小脳は、身体の平衡（バランス）と運動・姿勢の制御を司ります。障害されるとめまい、歩行障害、測定障害などが出現します。[15]",
    "reference": "Kaibou.pdf [15]"
  },
  {
    "id": 15,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "呼吸、循環（心拍）、嚥下といった生命維持に不可欠な「生命中枢」が集まっている脳の部位はどこか？",
    "options": ["前頭葉", "小脳", "脳幹（延髄など）", "大脳辺縁系"],
    "answer": 2,
    "explanation": "脳幹、特に「延髄」には、呼吸中枢や循環中枢といった生命維持の根幹をなす中枢が存在します。ここが損傷されると自発呼吸が停止します。[18, 19]",
    "reference": "Kaibou.pdf [18, 19]"
  },
  {
    "id": 16,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "右脳の運動野が損傷された場合、一般的に麻痺（運動障害）が出るのはどっちか？",
    "options": ["右半身", "左半身", "下半身のみ", "上半身のみ"],
    "answer": 1,
    "explanation": "運動神経（錐体路）は延髄の「錐体」で左右が交叉するため、右脳の障害は「左半身」の麻痺として現れます。[20]",
    "reference": "Kaibou.pdf [20]"
  },
  {
    "id": 17,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "「表情筋」を動かすための神経はどれか？",
    "options": ["三叉神経", "顔面神経", "舌咽神経", "動眼神経"],
    "answer": 1,
    "explanation": "顔の表情を作るのは「第VII脳神経：顔面神経」です。三叉神経は顔の感覚（痛みなど）を伝え、咀嚼筋（噛む筋肉）を動かします。[9]",
    "reference": "Kaibou.pdf [9]"
  },
  {
    "id": 18,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳血流の「自動調節能」が働いている、正常な平均血圧の範囲はおよそどれくらいか？",
    "options": ["30〜80 mmHg", "60〜150 mmHg", "100〜200 mmHg", "150〜250 mmHg"],
    "answer": 1,
    "explanation": "正常な脳では、平均血圧が「60〜150mmHg」の範囲であれば、血圧が変動しても脳血流量を一定に保つことができます。この範囲を外れると脳血流が血圧に依存して急激に変化します。[6]",
    "reference": "Kaibou.pdf [6]"
  },
  {
    "id": 19,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "「熱い」と感じて思わず手を引くような「脊髄反射」において、情報が折り返される場所はどこか？",
    "options": ["大脳皮質", "延髄", "脊髄", "末梢神経節"],
    "answer": 2,
    "explanation": "脊髄反射（膝蓋腱反射など）は、大脳まで判断を待たず「脊髄」のレベルで情報の折り返しが行われるため、極めて速い反応が可能です。[21]",
    "reference": "Kaibou.pdf [21]"
  },
  {
    "id": 20,
    "level": 2,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "言語中枢が存在する側の脳を何と呼ぶか？（右利きの約95％で左側にある）",
    "options": ["非優位半球", "優位半球", "感覚野", "基底核"],
    "answer": 1,
    "explanation": "言語中枢がある側を「優位半球」といいます。右利きの人のほとんどは左脳が優位半球です。脳卒中の際、優位半球が損傷されると失語症が出現します。[5]",
    "reference": "Kaibou.pdf [5]"
  },
  {
    "id": 21,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "体重60kgの成人男子において、循環血液量（全血液量）は約何リットルと想定されるか？",
    "options": ["約3L", "約5L", "約8L", "約10L"],
    "answer": 1,
    "explanation": "成人の全血液量は体重の約8％です。60kgの人なら、60 × 0.08 ＝ 約4.8L（およそ5L）と計算します。出血性ショックの緊急度判断の指標になります。[22, 23]",
    "reference": "Kaibou.pdf [22, 23]"
  },
  {
    "id": 22,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓自体を栄養する「冠動脈」において、血流が最も多く流れるタイミングはいつか？",
    "options": ["収縮期の開始時", "収縮期の最大圧時", "拡張期", "心房の収縮期"],
    "answer": 2,
    "explanation": "左心室を養う冠動脈は、心室が収縮している間は心筋に圧迫されて血流が制限されます。心室が休む「拡張期」に、心室内圧が下がることで多くの血液が流れます。[24]",
    "reference": "Kaibou.pdf [24]"
  },
  {
    "id": 23,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心拍出量を規定する4つの因子のうち、「収縮前に心室に存在する血液量（心筋の伸び）」を指す言葉はどれか？",
    "options": ["後負荷", "前負荷", "心拍数", "心収縮力"],
    "answer": 1,
    "explanation": "「前負荷」は拡張末期容積に相当し、血液が流入して心室が満たされる度合いです。スターリングの法則により、適度に引き伸ばされるほど収縮力が増します。[24]",
    "reference": "Kaibou.pdf [24]"
  },
  {
    "id": 24,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "末梢血管抵抗が急増した際（血管収縮など）、直接的に増加する心臓への負担はどれか？",
    "options": ["前負荷", "後負荷", "拡張期圧", "脈圧"],
    "answer": 1,
    "explanation": "「後負荷」は心室が血液を送り出す際に受ける抵抗です。高血圧や血管収縮は後負荷を増大させ、心臓の仕事量を増やし疲弊させます。[24, 25]",
    "reference": "Kaibou.pdf [24, 25]"
  },
  {
    "id": 25,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心周期において、房室弁（僧帽弁・三尖弁）が閉鎖した瞬間に発生する心音はどれか？",
    "options": ["I音（1音）", "II音（2音）", "III音（3音）", "IV音（4音）"],
    "answer": 0,
    "explanation": "収縮期の始まり、房室弁が閉まる音が「I音」です。拡張期の始まり、大動脈弁などの半月弁が閉まる音が「II音」です。心音の聴取は弁機能や心周期の理解に役立ちます。[26]",
    "reference": "Kaibou.pdf [26]"
  },
  {
    "id": 26,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "ショック状態で末梢の動脈が収縮し、皮膚が蒼白・冷汗を呈している。この反応に関与している自律神経受容体はどれか？",
    "options": ["α（アルファ）受容体", "β1（ベータ1）受容体", "β2（ベータ2）受容体", "ムスカリン受容体"],
    "answer": 0,
    "explanation": "交感神経から放出されたノルアドレナリンが血管の「α受容体」に結合すると、強力に血管を収縮させます。これが現場でみられる「冷感・蒼白」の原因です。[27, 28]",
    "reference": "Kaibou.pdf [27, 28]"
  },
  {
    "id": 27,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓の刺激伝導系において、通常「ペースメーカー」として最初に興奮が起きる部位はどこか？",
    "options": ["房室結節", "ヒス束", "洞結節", "プルキンエ線維"],
    "answer": 2,
    "explanation": "心臓の歩調取り（ペースメーカー）は上大静脈開口部付近にある「洞結節」です。ここからの電気信号が心房→房室結節→心室へと伝わります。[29]",
    "reference": "Kaibou.pdf [29]"
  },
  {
    "id": 28,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "静脈弁が備わっており、「容量血管」として全血液量の約60〜70％を貯留できるのはどれか？",
    "options": ["動脈系", "毛細血管系", "静脈系", "リンパ系"],
    "answer": 2,
    "explanation": "静脈は壁が薄く伸展しやすいため、血液を大量に溜める「容量血管」の役割をします。ショック時に足を上げる（下肢挙上）のは、この貯留した血液を心臓に戻すためです。[30]",
    "reference": "Kaibou.pdf [30]"
  },
  {
    "id": 29,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "平均動脈圧を求める簡易的な計算式として正しいものはどれか？",
    "options": ["（収縮期血圧 ＋ 拡張期血圧）÷ 2", "拡張期血圧 ＋ 脈圧 ÷ 3", "収縮期血圧 － 拡張期血圧", "脈拍数 × 1回拍出量"],
    "answer": 1,
    "explanation": "平均血圧は「拡張期血圧 ＋（脈圧/3）」で求めます。臓器への血流（灌流）を維持するためには、最高血圧だけでなく平均血圧が重要です。[27]",
    "reference": "Kaibou.pdf [27]"
  },
  {
    "id": 30,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心原性ショック（ポンプ失調）などで、1回拍出量が半分に低下した場合、生体が血圧を維持しようとして最初に行う代償反応はどれか？",
    "options": ["心拍数を増やす（頻脈）", "血管を拡張させる", "尿量を増やす", "呼吸を止める"],
    "answer": 0,
    "explanation": "心拍出量 ＝ 1回拍出量 × 心拍数 です。1回拍出量が減ると、生体は心拍数を増やして血圧（心拍出量）を維持しようとします。現場での頻脈はショックの代償サインです。[25]",
    "reference": "Kaibou.pdf [25]"
  },
  {
    "id": 31,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "頸動脈洞や大動脈弓にある、血圧の変化を感知して自律神経に情報を送るセンサーはどれか？",
    "options": ["化学受容体", "圧受容体", "温度受容体", "浸透圧受容体"],
    "answer": 1,
    "explanation": "「圧受容体（バロレセプター）」が血圧を感知します。血圧が下がるとこのセンサーが反応し、交感神経を興奮させて心拍数を上げ、血管を締めさせます。[27]",
    "reference": "Kaibou.pdf [27]"
  },
  {
    "id": 32,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血漿中の「アルブミン」が主に生み出している、血管内に水分を留めるための力は何というか？",
    "options": ["血液凝固圧", "膠質浸透圧", "静水圧", "毛細血管圧"],
    "answer": 1,
    "explanation": "アルブミンによる「膠質浸透圧（こうしつしんとうあつ）」が、水分を血管の中に引き止めています。低栄養や肝障害でアルブミンが減ると、浮腫（むくみ）が生じます。[11, 30]",
    "reference": "Kaibou.pdf [11, 30]"
  },
  {
    "id": 33,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "「左心室」の壁の厚さが右心室の約3倍ある理由はどれか？",
    "options": ["血液を肺に送るため", "全身へ高い圧力で血液を送り出すため", "心筋梗塞を防ぐため", "血液を貯める量を増やすため"],
    "answer": 1,
    "explanation": "左心室は、高い抵抗がある全身（体循環）へ血液を届けるため、非常に分厚い心筋で強力な圧力を発生させる必要があります。[31]",
    "reference": "Kaibou.pdf [31]"
  },
  {
    "id": 34,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血液凝固のプロセスにおいて、最終的に「二次血栓（安定した血栓）」を形成する網目状の物質はどれか？",
    "options": ["血小板", "アルブミン", "フィブリン", "ヘモグロビン"],
    "answer": 2,
    "explanation": "血小板が集まった一次血栓を、「フィブリン」の網目が覆って固めることで、安定した二次血栓（凝固血栓）が完成します。[32, 33]",
    "reference": "Kaibou.pdf [32, 33]"
  },
  {
    "id": 35,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心不全や肺水腫を疑う傷病者で、心音に「Ⅲ音（3音）」が聴取された場合、何を示唆しているか？",
    "options": ["心臓が極めて健康であること", "心室の拡張能が低下し、急速な血液流入で乱れが起きていること", "大動脈弁が閉まらないこと", "肺でガス交換が止まっていること"],
    "answer": 1,
    "explanation": "高齢者でのIII音聴取は、心不全などで心室に無理がかかっているサインであることが多いです。急速に血液が流れ込む際の振動音です。[26]",
    "reference": "Kaibou.pdf [26]"
  },
  {
    "id": 36,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "「リンパ系」の主な役割として、誤っているものはどれか？",
    "options": ["組織から漏出した水分を静脈に戻す", "細菌や異物を取り除き、生体を守る", "消化管から吸収された脂肪を運搬する", "肺でのガス交換を直接行う"],
    "answer": 3,
    "explanation": "リンパ系は循環の補助、免疫、脂肪運搬を担いますが、肺でのガス交換は血液（赤血球）の役割です。[30, 34]",
    "reference": "Kaibou.pdf [30, 34]"
  },
  {
    "id": 37,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血圧が低下した際に、副腎皮質から分泌され「ナトリウムと水の再吸収」を促進して体液量を増やすホルモンはどれか？",
    "options": ["インスリン", "アルドステロン", "アドレナリン", "グルカゴン"],
    "answer": 1,
    "explanation": "レニン・アンギオテンシン系の働きにより「アルドステロン」が分泌されると、腎臓で塩分と水を引き止め、血圧を上げようとします。[28, 35]",
    "reference": "Kaibou.pdf [28, 35]"
  },
  {
    "id": 38,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心筋細胞の表面にある「β1（ベータ1）受容体」が刺激された際に起こる反応はどれか？",
    "options": ["心拍数と心収縮力の低下", "心拍数と心収縮力の増加", "心停止", "血管の拡張のみ"],
    "answer": 1,
    "explanation": "交感神経が心筋の「β1受容体」を刺激すると、心臓はより速く、より強く動きます。心臓の機能を促進するスイッチです。[28]",
    "reference": "Kaibou.pdf [28]"
  },
  {
    "id": 39,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "脈圧（収縮期血圧 － 拡張期血圧）が極端に小さくなる「窄小（さくしょう）」を呈する病態として、疑われるのはどれか？",
    "options": ["激しい運動後", "心タンポナーデや重篤なショック", "大動脈弁閉鎖不全症", "高血圧症"],
    "answer": 1,
    "explanation": "心拍出量が著しく低下し、生体が血管を限界まで締めて代償している（拡張期血圧を維持している）場合、脈圧が小さくなります。心タンポナーデの典型的徴候です。[27, 31]",
    "reference": "Kaibou.pdf [27, 31]"
  },
  {
    "id": 40,
    "level": 2,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "門脈とは、どの臓器からの静脈血が集まり、どこへ運ばれる血管か？",
    "options": ["心臓から肺へ", "消化管や脾臓から肝臓へ", "腎臓から下大静脈へ", "脳から心臓へ"],
    "answer": 1,
    "explanation": "胃、腸、脾臓などの静脈血は一旦「門脈」に集まり、解毒や代謝のために「肝臓」へ運ばれます。肝硬変などでここが詰まると門脈圧亢進症になります。[36, 37]",
    "reference": "Kaibou.pdf [36, 37]"
  },
  {
    "id": 41,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "喉頭にある「喉頭蓋」の主な役割はどれか？",
    "options": ["声を作る", "嚥下時に気道の入口をふさぎ、誤嚥を防ぐ", "酸素と二酸化炭素を交換する", "気管の形を支える"],
    "answer": 1,
    "explanation": "喉頭蓋は、食べ物を飲み込む際に反射的に気管にフタをし、肺へ入るのを防ぐ「安全装置」です。意識障害時はこの反射が弱まるため注意が必要です。[38]",
    "reference": "Kaibou.pdf [38]"
  },
  {
    "id": 42,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "緊急時に「環状甲状間膜穿刺・切開」を行う部位は、どの軟骨の間か？",
    "options": ["甲状軟骨と輪状軟骨の間", "舌骨と甲状軟骨の間", "輪状軟骨と気管軟骨の間", "下顎骨と舌骨の間"],
    "answer": 0,
    "explanation": "上気道閉塞時の最終手段として、甲状軟骨（のど仏）と、そのすぐ下にある輪状軟骨の間の膜を穿刺・切開します。[38]",
    "reference": "Kaibou.pdf [38]"
  },
  {
    "id": 43,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "成人の気管分岐部において、右主気管支の特徴はどれか？（気管挿管時の片肺挿管に関連）",
    "options": ["左より細くて長い", "左より太くて短く、垂直に近い角度である", "左と同じ角度で分かれている", "後方に大きく曲がっている"],
    "answer": 1,
    "explanation": "右主気管支は太く短く、角度が約20〜25度と急です。そのため、チューブを入れすぎると右にばかり入りやすくなります（片肺挿管）。[39]",
    "reference": "Kaibou.pdf [39]"
  },
  {
    "id": 44,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "小児（乳幼児）の気道が、成人と比較して閉塞しやすい解剖学的理由はどれか？",
    "options": ["気道が直線的だから", "舌が相対的に大きく、気道がもともと狭いから", "軟骨が非常に硬いから", "肺が3つあるから"],
    "answer": 1,
    "explanation": "小児は口腔容積に対して「舌」が大きく、さらに気道が細いため、少しの腫れや舌根沈下で容易に完全閉塞をきたします。[39]",
    "reference": "Kaibou.pdf [39]"
  },
  {
    "id": 45,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "安静時の吸気において、約70％を担う主要な呼吸筋はどれか？",
    "options": ["腹直筋", "肋間筋", "横隔膜", "胸鎖乳突筋"],
    "answer": 2,
    "explanation": "安静時の呼吸の主役は「横隔膜」です。これが収縮して下がることで胸腔が広がり、空気が吸い込まれます。[40]",
    "reference": "Kaibou.pdf [40]"
  },
  {
    "id": 46,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "胸膜腔（肺と胸壁の間）に空気が溜まり、胸腔内圧の陰圧が失われて肺が縮んでしまう病態はどれか？",
    "options": ["血胸", "気胸", "肺水腫", "肺炎"],
    "answer": 1,
    "explanation": "通常は陰圧に保たれている胸膜腔に空気が入るのが「気胸」です。さらに圧が上がり心臓を圧迫すると緊張性気胸という致命的状態になります。[41]",
    "reference": "Kaibou.pdf [41]"
  },
  {
    "id": 47,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺胞でのガス交換において、酸素が大気からミトコンドリアへ分圧の差に従って流れていく現象を何というか？",
    "options": ["酸素カスケード（酸素瀑布）", "酸素飽和", "ヘンリーの法則", "分時換気量"],
    "answer": 0,
    "explanation": "大気（約150mmHg）からミトコンドリア（約1mmHg）まで、酸素が段々畑の滝のように流れることを「酸素カスケード」と呼びます。どこか一箇所でも滞ると細胞が死にます。[42]",
    "reference": "Kaibou.pdf [42]"
  },
  {
    "id": 48,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "血液中で酸素の大部分（約98％以上）を運搬しているのはどれか？",
    "options": ["血漿に溶けた状態", "白血球", "赤血球中のヘモグロビン", "血小板"],
    "answer": 2,
    "explanation": "酸素のほとんどは「ヘモグロビン」と結合して運ばれます。貧血や一酸化炭素中毒でヘモグロビンが機能しないと、酸素欠乏に陥ります。[43, 44]",
    "reference": "Kaibou.pdf [43, 44]"
  },
  {
    "id": 49,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "血中の二酸化炭素（CO2）濃度の上昇を感知し、呼吸を速く・深くするように指令を出す「中枢化学受容体」はどこにあるか？",
    "options": ["肺胞", "延髄", "心臓", "頸動脈小体"],
    "answer": 1,
    "explanation": "延髄にある中枢化学受容体はCO2に非常に敏感です。CO2が増えると（またはpHが下がると）、呼吸中枢を刺激して換気を促します。[19]",
    "reference": "Kaibou.pdf [19]"
  },
  {
    "id": 50,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺でのガス交換が行われる最小単位であり、毛細血管に囲まれている小さな袋を何というか？",
    "options": ["気管支", "肺胞", "肺門", "胸膜"],
    "answer": 1,
    "explanation": "「肺胞」は3億個ほどあり、テニスコート一面分ほどの面積で効率よくガス交換を行っています。ここが水で満たされるのが肺水腫です。[45]",
    "reference": "Kaibou.pdf [45]"
  },
  {
    "id": 51,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "「外呼吸」の定義として正しいものはどれか？",
    "options": ["細胞内で酸素を消費してATPを作ること", "肺胞の空気と、肺毛細血管の血液との間でのガス交換", "鼻から空気を吸うことのみ", "血液が組織に酸素を渡すこと"],
    "answer": 1,
    "explanation": "肺で行うガス交換が「外呼吸」です。組織の細胞レベルで行うガス交換は「内呼吸（組織呼吸）」と呼びます。[46, 47]",
    "reference": "Kaibou.pdf [46, 47]"
  },
  {
    "id": 52,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "パルスオキシメータで測定する「SpO2（経皮的酸素飽和度）」とは何をみているか？",
    "options": ["血液中に溶けている酸素の圧力（分圧）", "ヘモグロビンの何％が酸素と結合しているか", "呼吸が何回行われているか", "肺活量"],
    "answer": 1,
    "explanation": "SpO2は、酸素の運び手である「ヘモグロビンの酸素結合割合」です。酸素分圧が下がると（約60mmHg以下）、SpO2は急激に低下します。[48]",
    "reference": "Kaibou.pdf [48]"
  },
  {
    "id": 53,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "「換気血流比」が不均等になる（例えば肺の一部に血は流れるが空気が入らない）と、どのような状態になるか？",
    "options": ["血圧が急上昇する", "酸素化が不十分になり、低酸素血症になる", "二酸化炭素が完全に消失する", "体温が上がる"],
    "answer": 1,
    "explanation": "空気（換気）と血流のバランスが崩れると、効率よく酸素が取り込めません。これを「換気血流比不均等」といい、呼吸不全の大きな原因です。[49]",
    "reference": "Kaibou.pdf [49]"
  },
  {
    "id": 54,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "気管や気管支の内面にある「線毛」の役割はどれか？",
    "options": ["酸素を吸収する", "異物や粘液を口側へ運び出し、気道を清浄に保つ", "食べ物を消化する", "神経の信号を伝える"],
    "answer": 1,
    "explanation": "線毛は「ほうき」のように動き、ゴミや細菌を外へ追い出します。タバコや乾燥でこの動きが悪くなると、感染しやすくなります。[39]",
    "reference": "Kaibou.pdf [39]"
  },
  {
    "id": 55,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "努力性の呼吸（息苦しい時など）に使われる「呼吸補助筋」の代表例はどれか？",
    "options": ["上腕二頭筋", "胸鎖乳突筋（首の筋肉）", "大腿四頭筋", "大殿筋"],
    "answer": 1,
    "explanation": "呼吸が苦しい時、首の「胸鎖乳突筋」などが動員されます。これらが動いているのは重篤な呼吸困難のサインです。[40]",
    "reference": "Kaibou.pdf [40]"
  },
  {
    "id": 56,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "「酸塩基平衡」において、換気量を増やして二酸化炭素（CO2）をたくさん排出すると、体液はどう変化するか？",
    "options": ["酸性に傾く（アシドーシス）", "アルカリ性に傾く（アルカローシス）", "変化しない", "温度が上がる"],
    "answer": 1,
    "explanation": "CO2は水に溶けると酸として働きます。過換気などでCO2を出しすぎると、体はアルカリ側に傾きます。[50, 51]",
    "reference": "Kaibou.pdf [50, 51]"
  },
  {
    "id": 57,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "心不全などで「肺水腫」が起きると、なぜ呼吸が苦しくなるのか？",
    "options": ["肺が大きくなりすぎるから", "肺胞と毛細血管の間に水が溜まり、酸素の拡散が妨げられるから", "肺に空気が入りすぎるから", "気管が太くなるから"],
    "answer": 1,
    "explanation": "肺胞に水がたまると、酸素が血液に届くまでの距離が遠くなり（拡散障害）、ガス交換ができなくなるため、激しい呼吸困難になります。[52]",
    "reference": "Kaibou.pdf [52]"
  },
  {
    "id": 58,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "酸素解離曲線が「右方シフト」する（ヘモグロビンが酸素を離しやすくなる）条件はどれか？",
    "options": ["体温の低下", "体温の上昇やアシドーシス", "アルカローシス", "高山病"],
    "answer": 1,
    "explanation": "体温が上がったり酸性（アシドーシス）になると、ヘモグロビンは組織に酸素を渡しやすくなります。これは代謝が活発な組織を助ける反応です。[48]",
    "reference": "Kaibou.pdf [48]"
  },
  {
    "id": 59,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "鼻から吸った空気が通過する際、肺を保護するために行われる調整はどれか？",
    "options": ["乾燥させる", "冷却する", "加温・加湿・除塵", "二酸化炭素を混ぜる"],
    "answer": 2,
    "explanation": "鼻腔を通ることで空気は適度に「温められ」「湿り気を持ち」「ゴミが除かれ」ます。これが肺胞への刺激を和らげます。[39, 53]",
    "reference": "Kaibou.pdf [39, 53]"
  },
  {
    "id": 60,
    "level": 2,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "「死腔（しくう）」とはどのような領域を指すか？",
    "options": ["酸素を使い果たした細胞", "ガス交換に関与しない気道（鼻〜終末細気管支）の部分", "肺胞そのもの", "心臓の中"],
    "answer": 1,
    "explanation": "鼻から気管支までの、ガス交換をしない通路の部分を「死腔」といいます。呼吸が浅すぎると、この部分の空気が入れ替わるだけで肺胞に新鮮な空気が届きません。[47]",
    "reference": "Kaibou.pdf [47]"
  },
  {
    "id": 61,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓は後腹膜臓器であるが、その解剖学的な位置（高さ）の目安として正しいのはどれか？",
    "options": ["第1〜5頸椎の高さ", "第12胸椎〜第3腰椎の高さ", "骨盤の中", "おへそのすぐ裏側"],
    "answer": 1,
    "explanation": "腎臓は背中側の「第12胸椎から第3腰椎」の高さに左右1つずつあります。右腎は肝臓があるため左より少し低いです。[54]",
    "reference": "Kaibou.pdf [54]"
  },
  {
    "id": 62,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓において、尿を生成する最小の基本単位（腎小体＋尿細管）を何と呼ぶか？",
    "options": ["ニューロン", "ネフロン", "アルブミン", "肺胞"],
    "answer": 1,
    "explanation": "「ネフロン」が尿を作る工場です。片方の腎臓におよそ100万個あり、血液をろ過して尿を作っています。[55]",
    "reference": "Kaibou.pdf [55]"
  },
  {
    "id": 63,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓でろ過される「原尿」は1日に約何リットル作られるか？（最終的に尿になるのは約1.5L）",
    "options": ["約1.5L", "約10L", "約170〜180L", "約500L"],
    "answer": 2,
    "explanation": "糸球体でろ過される原尿は1日約180Lにもなりますが、その99％以上が尿細管で再吸収され、最終的な「尿」として出るのは約1.5L程度です。[55]",
    "reference": "Kaibou.pdf [55]"
  },
  {
    "id": 64,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "脱水時や血圧低下時に、下垂体後葉から分泌されて「尿量を減らし、水を保持する」働きをするホルモンはどれか？",
    "options": ["抗利尿ホルモン（ADH/バソプレシン）", "インスリン", "甲状腺ホルモン", "オキシトシン"],
    "answer": 0,
    "explanation": "「抗利尿ホルモン（ADH）」が働くと、腎臓で水が再吸収され、尿が濃くなって体内にとどまります。ショック時の生体防御反応の一つです。[56-58]",
    "reference": "Kaibou.pdf [56-58]"
  },
  {
    "id": 65,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓から分泌され、骨髄を刺激して「赤血球」を作らせるホルモンはどれか？",
    "options": ["レニン", "エリスロポエチン", "アドレナリン", "ガストリン"],
    "answer": 1,
    "explanation": "「エリスロポエチン」は赤血球産生を促します。慢性腎不全でこのホルモンが減ると、重い貧血（腎性貧血）になります。[59, 60]",
    "reference": "Kaibou.pdf [59, 60]"
  },
  {
    "id": 66,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓から「レニン」が分泌されるきっかけとなる状況はどれか？",
    "options": ["血圧が上昇した時", "腎血流が低下（血圧が低下）した時", "血糖値が上がった時", "水分を摂りすぎた時"],
    "answer": 1,
    "explanation": "血圧が下がると腎臓から「レニン」が出て、血圧を上げる仕組み（RAA系）が作動します。腎臓は血圧調節の要です。[28, 35]",
    "reference": "Kaibou.pdf [28, 35]"
  },
  {
    "id": 67,
    "level": 2,
    "anatomy": "anatomy",
    "subCategory": "urinary",
    "text": "尿路（尿の通り道）の生理的狭窄部（詰まりやすい場所）はいくつあるか？",
    "options": ["1か所", "3か所", "5か所", "なし"],
    "answer": 1,
    "explanation": "尿管には、腎盂尿管移行部、総腸骨血管交差部、膀胱壁内部の「3か所」に狭い場所があり、尿管結石などが詰まりやすいポイントです。[57]",
    "reference": "Kaibou.pdf [57]"
  },
  {
    "id": 68,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "女性の尿道が男性よりも短いために起こりやすい疾患はどれか？",
    "options": ["腎結石", "膀胱炎（上行性感染）", "前立腺肥大", "尿崩症"],
    "answer": 1,
    "explanation": "女性の尿道は3〜4cmと短いため、外部からの細菌が膀胱に届きやすく、膀胱炎になりやすい解剖学的特徴があります。[35]",
    "reference": "Kaibou.pdf [35]"
  },
  {
    "id": 69,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓での尿生成の第一段階である「糸球体濾過」において、通常はろ過されない（尿に出ない）大きな物質はどれか？",
    "options": ["水", "電解質（ナトリウムなど）", "蛋白質（アルブミンなど）や血球", "尿素"],
    "answer": 2,
    "explanation": "健康な腎臓は、大きな「蛋白質」や「血球」をろ過しません。これらが尿に出る（蛋白尿・血尿）のは、腎臓のフィルター故障のサインです。[55]",
    "reference": "Kaibou.pdf [55]"
  },
  {
    "id": 70,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "排尿をコントロールする筋肉のうち、自分の意志で緩めることができる「随意筋」はどれか？",
    "options": ["排尿筋（膀胱壁の筋肉）", "内尿道括約筋", "外尿道括約筋", "輸尿管の筋肉"],
    "answer": 2,
    "explanation": "「外尿道括約筋」は随意筋（骨格筋）であり、意識的に締めることで排尿を我慢できます。内尿道括約筋は自律神経支配の不随意筋です。[35]",
    "reference": "Kaibou.pdf [35]"
  },
  {
    "id": 71,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "体液（内部環境）の「浸透圧」を決定する、最も主要な電解質はどれか？",
    "options": ["カリウム", "カルシウム", "ナトリウム", "マグネシウム"],
    "answer": 2,
    "explanation": "細胞外液の浸透圧（濃さ）は、事実上「ナトリウム（Na）」の濃度によって決まります。Naの異常は脳細胞の浮腫などを招き危険です。[61, 62]",
    "reference": "Kaibou.pdf [61, 62]"
  },
  {
    "id": 72,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓が体液の「酸塩基平衡」を保つために行っていることはどれか？",
    "options": ["二酸化炭素を吸い込む", "水素イオンを排泄し、炭酸水素イオンを再吸収する", "酸素を尿に出す", "糖をアルカリに変える"],
    "answer": 1,
    "explanation": "腎臓は体内の余分な「水素イオン（酸）」を捨て、アルカリの素となる「炭酸水素イオン」を回収することで、pHを一定に保っています。[14, 62, 63]",
    "reference": "Kaibou.pdf [14, 62, 63]"
  },
  {
    "id": 73,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "尿管が膀胱に斜めに貫通していることにより防いでいる現象はどれか？",
    "options": ["尿の生成のしすぎ", "膀胱からの尿の逆流", "腎臓の腫れ", "結石の形成"],
    "answer": 1,
    "explanation": "この斜めの構造が弁のような役割をし、膀胱が満タンになっても尿が腎臓へ戻らない（逆流しない）ように守っています。[57]",
    "reference": "Kaibou.pdf [57]"
  },
  {
    "id": 74,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "成人の「1日尿量」として、正常範囲といえるのはどれか？",
    "options": ["100〜300 mL", "500〜2,000 mL", "3,000〜5,000 mL", "10,000 mL以上"],
    "answer": 1,
    "explanation": "正常な1日尿量は「500〜2,000mL（平均1.5L）」です。400mL以下は「少尿」、100mL以下は「無尿」と呼び、腎不全の重篤なサインです。[56]",
    "reference": "Kaibou.pdf [56]"
  },
  {
    "id": 75,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓の上に乗っている、アドレナリンやコルチゾールを分泌する内分泌器官はどれか？",
    "options": ["膵臓", "副腎", "下垂体", "胸腺"],
    "answer": 1,
    "explanation": "「副腎」は腎臓の上部にあり、ショックに対抗するためのホルモンを出す非常に重要な臓器です。[35, 54]",
    "reference": "Kaibou.pdf [35, 54]"
  },
  {
    "id": 76,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "心拍出量のうち、約何％が腎臓に流れ込んでいるか？",
    "options": ["約5％", "約10％", "約20〜25％", "約50％"],
    "answer": 2,
    "explanation": "心臓が出す血液の「約20〜25％」という大量の血液が腎臓に流れています。そのため、血圧が下がると真っ先に腎機能に影響が出ます。[36, 59] ",
    "reference": "Kaibou.pdf [36, 59]"
  },
  {
    "id": 77,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "「痛風」の原因となり、腎臓から排泄されるべき老廃物はどれか？",
    "options": ["ブドウ糖", "尿酸", "アミノ酸", "ヘモグロビン"],
    "answer": 1,
    "explanation": "「尿酸」がうまく排泄されず血中で増えると、関節で結晶化して激痛を伴う痛風を引き起こします。[56]",
    "reference": "Kaibou.pdf [56]"
  },
  {
    "id": 78,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "膀胱の内面を覆っている、尿が溜まると伸び広がる特殊な上皮を何というか？",
    "options": ["単層扁平上皮", "移行上皮", "線毛上皮", "円柱上皮"],
    "answer": 1,
    "explanation": "「移行上皮」は伸縮性に富み、膀胱が空の時は厚く、尿が溜まると薄く伸びることで、大量の尿を貯留することを可能にしています。[57]",
    "reference": "Kaibou.pdf [57]"
  },
  {
    "id": 79,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "糖尿病の傷病者で、尿に糖が出るのはなぜか？",
    "options": ["腎臓が糖を作りすぎているから", "血中の糖濃度が高すぎて、尿細管での再吸収能力を超えてしまうから", "膀胱で糖が作られるから", "インスリンが尿に出るから"],
    "answer": 1,
    "explanation": "通常、糖は尿細管で100％回収されますが、血糖値が一定以上（約180mg/dL以上）になると回収しきれず尿に漏れ出します。[55]",
    "reference": "Kaibou.pdf [55]"
  },
  {
    "id": 80,
    "level": 2,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "「腎盂（じんう）」の役割はどれか？",
    "options": ["血液をろ過する", "各ネフロンで作られた尿を集め、尿管へ送り出す", "ホルモンを作る", "水分を補給する"],
    "answer": 1,
    "explanation": "「腎盂」は、腎臓で作られた尿が最初に集まる「漏斗」のような場所です。ここに感染が起きるのが腎盂腎炎です。[57, 59]",
    "reference": "Kaibou.pdf [57, 59]"
  },
   {
    "id": 1,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "骨の生理的機能および微細構造に関する記述のうち、誤っているものはどれか？",
    "options": [
      "皮質骨は全骨量の約80％を占めるが、表面積は海綿骨の方が広い。",
      "成人の赤色骨髄は主に長管骨の骨幹部に存在し、活発な造血を行う。",
      "骨は全身のカルシウムの約99％を貯蔵しており、血中濃度を一定に保つ役割をもつ。",
      "骨膜は骨の太さの成長に関与し、小児では成人よりも厚い。"
    ],
    "answer": 1,
    "explanation": "成人の赤色骨髄は主に胸骨、肋骨、脊椎、腸骨などの「扁平骨」に存在します。長管骨の骨幹部は加齢とともに脂肪組織である「黄色骨髄」に置き換わり、造血機能は低下しています。（Kaibou.pdf p.152, p.147）",
    "reference": "Kaibou.pdf p.152, 147"
  },
  {
    "id": 2,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "骨格筋の収縮機序およびエネルギー代謝に関する記述として、正しいものはどれか？",
    "options": [
      "筋収縮の際、アクチンとミオシンがスライドして結合することをアクトミオシンと呼ぶ。",
      "筋収縮によるエネルギー効率は約80％であり、残りが体熱へと変換される。",
      "シバリング（ふるえ）は、骨格筋の随意的な収縮により熱を産生する機序である。",
      "骨格筋細胞は単核細胞であり、自律神経の支配を直接受ける。"
    ],
    "answer": 0,
    "explanation": "筋収縮は神経信号によりアクチンとミオシンが滑り込みながら結合（アクトミオシン形成）することで起こります。筋収縮のエネルギー効率は約50％以下で、残りの半分以上が熱に変わります。シバリングは「不随意」な収縮です。（Kaibou.pdf p.151, p.207）",
    "reference": "Kaibou.pdf p.151, 207"
  },
  {
    "id": 3,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "脊柱の解剖学的構造に関する記述のうち、正しいものはどれか？",
    "options": [
      "頸椎は7個、胸椎は12個、腰椎は5個で構成される。",
      "椎体と椎弓に囲まれた空間は椎間孔と呼ばれ、脊髄神経が分岐する。",
      "生理的彎曲において、胸椎と腰椎は前方に凸の彎曲（前弯）を呈する。",
      "椎間板は中心部の線維輪とそれを包む髄核から構成される。"
    ],
    "answer": 0,
    "explanation": "脊柱の数は選択肢Aが正解です。B：脊髄が通る空間は「脊柱管」です（椎間孔は神経根の出口）。C：胸椎は「後弯」です。D：椎間板は中心が「髄核」、周囲が「線維輪」です。（Kaibou.pdf p.153-154）",
    "reference": "Kaibou.pdf p.153-154"
  },
  {
    "id": 4,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "意識の維持機構と脳幹の機能に関する記述として、最も適切なものはどれか？",
    "options": [
      "意識の明瞭度（覚醒度）は、主に大脳皮質の広範な領域によって直接維持されている。",
      "上行性網様体賦活系は、間脳・中脳・橋・延髄にわたって存在し、覚醒機能を司る。",
      "脳死判定において、脳幹反射が消失していても大脳機能が残存していれば脳死とはならない。",
      "延髄には、食欲中枢や体温調節中枢などの自律神経の最高中枢が存在する。"
    ],
    "answer": 1,
    "explanation": "覚醒機能（意識の明瞭度）は、脳幹にある「上行性網様体賦活系」が司ります。大脳皮質は主に「意識の内容（認知機能）」に関与します。自律神経の最高中枢は間脳の「視床下部」です。（Kaibou.pdf p.90, p.47）",
    "reference": "Kaibou.pdf p.90, 47"
  },
  {
    "id": 5,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳血管系および脳脊髄液（CSF）の循環に関する記述のうち、正しいものはどれか？",
    "options": [
      "椎骨動脈は鎖骨下動脈から分岐し、大後頭孔を通って頭蓋内に入る。",
      "ウィリス動脈輪を構成する血管に、中大脳動脈は含まれない。",
      "髄液は主に第四脳室の脈絡叢で産生され、1日に約1.5L分泌される。",
      "正常な脳において、自動調節能が働く平均血圧の範囲は100〜180mmHgである。"
    ],
    "answer": 0,
    "explanation": "Aが正解。B：ウィリス動脈輪は前・後大脳動脈、内頸動脈、前・後交通動脈で構成されます（中大脳動脈は直接の輪には含まれないが内頸の主要分枝）。C：髄液産生量は1日約500mLです。D：自動調節能は「60〜150mmHg」の範囲です。（Kaibou.pdf p.89, p.51, p.90）",
    "reference": "Kaibou.pdf p.89, 51, 90"
  },
  {
    "id": 6,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳神経とその障害時の症状の組み合わせとして、誤っているものはどれか？",
    "options": [
      "第III脳神経（動眼神経） ― 対光反射の消失・散瞳",
      "第V脳神経（三叉神経） ― 顔面の知覚障害・咀嚼困難",
      "第VII脳神経（顔面神経） ― 舌の後ろ1/3の味覚障害",
      "第X脳神経（迷走神経） ― 声帯麻痺・嚥下障害"
    ],
    "answer": 2,
    "explanation": "顔面神経は「舌の前2/3」の味覚を司ります。「舌の後ろ1/3」の味覚を司るのは第IX脳神経（舌咽神経）です。（Kaibou.pdf p.85）",
    "reference": "Kaibou.pdf p.85"
  },
  {
    "id": 7,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心拍出量の規定因子と心機能曲線（スターリングの法則）に関する記述として、正しいものはどれか？",
    "options": [
      "前負荷とは、心室が血液を送り出す際に受ける抵抗（末梢血管抵抗など）を指す。",
      "スターリングの法則によれば、拡張末期容積が増大するほど心筋収縮力は減弱する。",
      "心拍出量は「1回拍出量 × 心拍数」で求められ、成人の基準値は約5L/分である。",
      "後負荷が増大すると、心収縮力が一定であっても1回拍出量は増加する。"
    ],
    "answer": 2,
    "explanation": "A：それは「後負荷」の説明です。B：拡張末期容積（前負荷）が増えるほど収縮力は「増大」します。D：後負荷（抵抗）が増えれば、1回拍出量は「減少」します。（Kaibou.pdf p.115）",
    "reference": "Kaibou.pdf p.115"
  },
  {
    "id": 8,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "冠循環の解剖生理的特徴に関する記述のうち、正しいものはどれか？",
    "options": [
      "冠動脈は、心臓の「収縮期」に最も多くの血流が流れる。",
      "左冠動脈主幹部は、前下行枝と回旋枝に分岐する。",
      "右冠動脈は通常、心室中隔の前2/3を栄養している。",
      "冠血流量は、安静時で心拍出量の約15％を占める。"
    ],
    "answer": 1,
    "explanation": "A：冠血流（特に左室）は「拡張期」に最大となります。C：中隔の前2/3は左冠動脈の「前下行枝」が栄養します。D：冠血流量は心拍出量の約「5％（約250mL/分）」です。（Kaibou.pdf p.114）",
    "reference": "Kaibou.pdf p.114"
  },
  {
    "id": 9,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血圧調節および自律神経受容体に関する記述のうち、誤っているものはどれか？",
    "options": [
      "血管平滑筋のα1受容体が刺激されると、血管が収縮し血圧が上昇する。",
      "心筋のβ1受容体が刺激されると、心拍数および心収縮力が増加する。",
      "頸動脈洞にある圧受容体は、血圧上昇を感知すると交感神経を興奮させる。",
      "アンギオテンシンIIは、強力な血管収縮作用とアルドステロン分泌促進作用をもつ。"
    ],
    "answer": 2,
    "explanation": "圧受容体が「血圧上昇」を感知すると、反射的に交感神経を「抑制」し、副交感神経を介して血圧を下げようとします（減圧反射）。（Kaibou.pdf p.117-118）",
    "reference": "Kaibou.pdf p.117-118"
  },
  {
    "id": 10,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺胞ガス交換および酸素運搬に関する記述として、正しいものはどれか？",
    "options": [
      "大気中の酸素分圧は約150mmHgであり、肺胞内では二酸化炭素の排出等により約100mmHgとなる。",
      "酸素解離曲線が「右方シフト」すると、ヘモグロビンと酸素の親和性が高まり、組織へ酸素を渡しにくくなる。",
      "二酸化炭素は血液中で、その大部分（約98％）がヘモグロビンと結合して運搬される。",
      "パルスオキシメータ（SpO2）は、血漿中に物理的に溶解している酸素分圧（PaO2）を測定している。"
    ],
    "answer": 0,
    "explanation": "Aが正解（酸素カスケード）。B：右方シフトは酸素を「離しやすく」なり、組織への供給を助けます。C：CO2の大部分は「炭酸水素イオン」として運ばれます。D：SpO2は「ヘモグロビン結合酸素の割合」をみています。（Kaibou.pdf p.105-107, p.161）",
    "reference": "Kaibou.pdf p.105-107, 161"
  },
  {
    "id": 11,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "呼吸の調節機序に関する記述のうち、正しい組み合わせはどれか？",
    "options": [
      "中枢化学受容体 ― 延髄にあり、主に血中の低酸素（PaO2低下）を感知する。",
      "末梢化学受容体 ― 頸動脈小体にあり、主に二酸化炭素分圧（PaCO2）の上昇を感知する。",
      "ヘーリング・ブロイエル反射 ― 肺の過膨張を防ぐための伸展受容器による反射である。",
      "呼吸中枢 ― 小脳に存在し、随意的な呼吸リズムを決定している。"
    ],
    "answer": 2,
    "explanation": "Cが正解。A：中枢化学受容体は「PaCO2上昇/pH低下」に敏感です。B：末梢化学受容体（頸動脈小体）は「PaO2低下」に敏感です。D：呼吸中枢は「延髄と橋」にあります。（Kaibou.pdf p.107）",
    "reference": "Kaibou.pdf p.107"
  },
  {
    "id": 12,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "小児（乳幼児）の気道の解剖学的特徴として、成人と比較して「誤っている」ものはどれか？",
    "options": [
      "喉頭の位置が、成人（第4〜6頸椎）に比べて高い位置（第3〜4頸椎）にある。",
      "喉頭蓋は成人に比べて相対的に長く、硬くてしなやかさがない。",
      "気管分岐部における右主気管支の角度は、成人と比較して垂直に近い。",
      "舌が相対的に大きく、口腔容積を占める割合が高いため、舌根沈下を起こしやすい。"
    ],
    "answer": 2,
    "explanation": "小児の主気管支の角度は、右が約30°、左が約47°であり、成人の右（20〜25°）に比べると、小児の方が左右の角度差が少なく、より水平に近い（なだらか）です。垂直に近いのは成人の方です。（Kaibou.pdf p.101-102）",
    "reference": "Kaibou.pdf p.101-102"
  },
  {
    "id": 13,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓の構造および尿生成に関する記述として、正しいものはどれか？",
    "options": [
      "ネフロンは「腎小体（糸球体＋ボーマン嚢）」と「尿細管」から構成される最小単位である。",
      "糸球体濾過量（GFR）の健康成人における基準値は、1日あたり約1.5Lである。",
      "近位尿細管では、原尿中の水分の約10％が再吸収される。",
      "腎臓は後腹膜臓器であり、左腎は右腎よりも約1.5cm低い位置にある。"
    ],
    "answer": 0,
    "explanation": "Aが正解。B：GFRは「1分間」あたり約120mL（1日約170〜180L）です。1.5Lは最終的な尿量です。C：近位尿細管では約「80〜85％」が再吸収されます。D：右腎の方が（肝臓があるため）低いです。（Kaibou.pdf p.130-131）",
    "reference": "Kaibou.pdf p.130-131"
  },
  {
    "id": 14,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎機能に関わるホルモン調節についての記述のうち、正しいものはどれか？",
    "options": [
      "エリスロポエチンは、血圧低下を感知して腎尿細管の間質細胞から分泌される。",
      "レニンは、腎血流の低下に伴い分泌され、最終的にアンギオテンシンIIを産生させる。",
      "抗利尿ホルモン（ADH）は、腎尿細管での「ナトリウム」の再吸収を促進する。",
      "心房性ナトリウム利尿ペプチド（ANP）は、尿量を減少させて血圧を上昇させる。"
    ],
    "answer": 1,
    "explanation": "Bが正解（RAA系）。A：エリスロポエチンは「低酸素」を感知して分泌されます。C：ADHは「水」の再吸収を促進します。D：ANPはナトリウムと水を排泄させ、血圧を「低下」させます。（Kaibou.pdf p.131, p.118）",
    "reference": "Kaibou.pdf p.131, 118"
  },
  {
    "id": 15,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "尿路の解剖学的走行と生理的狭窄部に関する記述として、正しいものはどれか？",
    "options": [
      "尿管には、腎盂尿管移行部、総腸骨血管交差部、膀胱壁内部の3カ所に狭窄部がある。",
      "成人の尿管の長さは約10cmであり、重力により受動的に尿を輸送する。",
      "女性の尿道は16〜18cmと長く、男性に比べて尿道損傷を起こしやすい。",
      "膀胱の筋層は、随意的調整が可能な横紋筋（排尿筋）で構成されている。"
    ],
    "answer": 0,
    "explanation": "Aが正解。B：尿管の長さは約25〜28cmで、蠕動運動により輸送します。C：女性の尿道は3〜4cmと短いです。D：排尿筋は自律神経支配の「不随意平滑筋」です。（Kaibou.pdf p.131）",
    "reference": "Kaibou.pdf p.131"
  },
  {
    "id": 16,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "関節の構造と運動に関する記述のうち、正しい組み合わせはどれか？",
    "options": [
      "股関節 ― 蝶番関節であり、多軸性の運動が可能である。",
      "肘関節 ― 球関節であり、一方向のみの屈曲・伸展が可能である。",
      "靱帯 ― 骨と骨を結合し、過剰な関節運動を抑制する静的な支持機構である。",
      "腱 ― 骨と骨を結合し、関節包の内面で滑液を分泌する。"
    ],
    "answer": 2,
    "explanation": "Cが正解。A：股関節は「球関節」です。B：肘関節は「蝶番関節」です。D：腱は「筋肉と骨」を結合する動的支持機構です。（Kaibou.pdf p.152-153）",
    "reference": "Kaibou.pdf p.152-153"
  },
  {
    "id": 17,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "大脳皮質の機能局在（中枢）に関する記述のうち、誤っているものはどれか？",
    "options": [
      "前頭葉の運動野（中心前回）は、身体の反対側の随意運動を支配する。",
      "頭頂葉の感覚野（中心後回）は、皮膚感覚や深部感覚の中継核となる。",
      "後頭葉の視覚野は、視野の情報を処理し、損傷すると反対側の同名半盲を呈する。",
      "側頭葉の聴覚野は、音の知覚に関与し、言語中枢（ウェルニッケ野）と隣接する。"
    ],
    "answer": 1,
    "explanation": "感覚の「中継核」となるのは間脳の「視床」です。感覚野（中心後回）は、中継された感覚を最終的に認知する場所です。（Kaibou.pdf p.81, p.47）",
    "reference": "Kaibou.pdf p.81, 47"
  },
  {
    "id": 18,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血液凝固および止血機序に関する記述として、正しいものはどれか？",
    "options": [
      "一次止血は、凝固因子が活性化されてフィブリンが形成されることで完了する。",
      "トロンビンは、フィブリノゲンをフィブリンに転換する作用をもつ酵素である。",
      "内因系凝固経路は、組織液（組織トロンボプラスチン）が血液に混入することで開始される。",
      "線溶系の主役であるプラスミンは、血小板を分解して血管修復を促進する。"
    ],
    "answer": 1,
    "explanation": "Bが正解。A：フィブリン形成は「二次止血」です。C：それは「外因系」の説明です。D：プラスミンは「フィブリン（またはフィブリノゲン）」を分解します。（Kaibou.pdf p.148-149）",
    "reference": "Kaibou.pdf p.148-149"
  },
  {
    "id": 19,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺の解剖学的構造に関する記述のうち、誤っているものはどれか？",
    "options": [
      "右肺は上・中・下の三葉、左肺は上・下の二葉に分かれる。",
      "肺尖は第一肋骨よりも上方（頸部基部）に突出している。",
      "II型肺胞細胞は、肺胞の虚脱を防ぐための表面活性物質（サーファクタント）を分泌する。",
      "気管支動脈は、肺でのガス交換（酸素化）を主目的とする機能血管である。"
    ],
    "answer": 3,
    "explanation": "気管支動脈は、気管支や肺組織自体を養う「栄養血管」です。ガス交換を目的とする機能血管は「肺動脈」です。（Kaibou.pdf p.104）",
    "reference": "Kaibou.pdf p.104"
  },
  {
    "id": 20,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "体液の酸塩基平衡および調節機能に関する記述のうち、正しい組み合わせはどれか？",
    "options": [
      "動脈血pHの正常範囲は 7.00 〜 7.10 と、中性よりも酸性側である。",
      "呼吸性調節では、換気量を減少させることで体内のCO2を放出し、pHを上昇させる。",
      "腎臓による調節は、数分から数時間で効果が現れる最も迅速な調節機構である。",
      "腎臓は水素イオン（H+）を排泄し、炭酸水素イオン（HCO3-）を再吸収することでpHを調節する。"
    ],
    "answer": 3,
    "explanation": "Dが正解。A：正常pHは 7.35〜7.45（弱アルカリ性）です。B：換気量を「増加」させるとCO2が抜け、pHが上昇（アルカリ化）します。C：腎臓の調節は「数時間〜数日」かかる最も遅いが強力な機構です。（Kaibou.pdf p.60-61）",
    "reference": "Kaibou.pdf p.60-61"
  },
  {
    "id": 21,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "成人の骨における造血組織とカルシウム代謝に関する記述のうち、誤っているものはどれか？",
    "options": [
      "副甲状腺ホルモンは、骨吸収を促進して血中カルシウム濃度を上昇させる。",
      "ビタミンDは、腸管からのカルシウム吸収を促進する働きをもつ。",
      "成人の赤色骨髄は、大腿骨や上腕骨の骨幹中央部に豊富に認められる。",
      "海綿骨は、皮質骨（緻密骨）に比べて単位重量あたりの表面積が大きく、代謝回転が速い。"
    ],
    "answer": 2,
    "explanation": "成人の長管骨の骨幹部は「黄色骨髄（脂肪）」に置き換わっており、造血を行う赤色骨髄は消失しています。造血は扁平骨（骨盤、胸骨など）で行われます。（Kaibou.pdf p.152）",
    "reference": "Kaibou.pdf p.152"
  },
  {
    "id": 22,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "自律神経系の作用とその神経伝達物質に関する記述として、正しいものはどれか？",
    "options": [
      "交感神経の節前線維末端からは、ノルアドレナリンが放出される。",
      "副交感神経の節後線維末端からは、アセチルコリンが放出される。",
      "交感神経が興奮すると、消化管の蠕動運動および分泌機能が亢進する。",
      "副交感神経（迷走神経）が刺激されると、心拍数が増加し、血圧が上昇する。"
    ],
    "answer": 1,
    "explanation": "Bが正解。A：節前線維は交感・副交感ともに「アセチルコリン」です。C：交感神経は消化機能を「抑制」します。D：迷走神経刺激は心拍数を「減少」させます。（Kaibou.pdf p.88）",
    "reference": "Kaibou.pdf p.88"
  },
  {
    "id": 23,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓の刺激伝導系および心周期に関する記述のうち、正しいものはどれか？",
    "options": [
      "洞結節で発生した興奮は、プルキンエ線維、ヒス束の順に伝導される。",
      "第一心音（I音）は、心室収縮の開始時における「半月弁」の閉鎖音である。",
      "心電図のP波は心房の脱分極（興奮）を表し、QRS波は心室の脱分極を表す。",
      "等容収縮期とは、房室弁が開放し心室圧が急激に低下する時期を指す。"
    ],
    "answer": 2,
    "explanation": "Cが正解。A：順序は「洞結節→房室結節→ヒス束→脚→プルキンエ線維」です。B：I音は「房室弁」の閉鎖音です。D：等容収縮期は全ての弁が閉じ、心室圧が「上昇」する時期です。（Kaibou.pdf p.112-113）",
    "reference": "Kaibou.pdf p.112-113"
  },
  {
    "id": 24,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "呼吸筋および胸腔内圧の変化に関する記述として、正しいものはどれか？",
    "options": [
      "安静時の吸気において、横隔膜は約30％の寄与率しか持たない。",
      "吸気時には横隔膜が収縮して下降し、胸腔内圧の陰圧度が大きくなる。",
      "安静時の呼気は、腹直筋などの呼気筋が積極的に収縮することで行われる。",
      "胸腔内圧は、正常な呼気終末においても常に大気圧よりも高い（陽圧である）。"
    ],
    "answer": 1,
    "explanation": "Bが正解。A：横隔膜は吸気の「約70％」を担います。C：安静時の呼気は肺の弾性収縮による「受動的」なプロセスです。D：胸腔内圧は常に大気圧より「低い（陰圧）」状態に維持されています。（Kaibou.pdf p.103）",
    "reference": "Kaibou.pdf p.103"
  },
  {
    "id": 25,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓の血管走行および血流量に関する記述のうち、正しいものはどれか？",
    "options": [
      "腎臓への流入血流量は、心拍出量の約20〜25％を占める。",
      "輸入細動脈は、糸球体を通過した後に直接腎静脈へと合流する。",
      "腎門部において、前（腹側）から順に「腎動脈、腎静脈、尿管」の順で並んでいる。",
      "腎皮質は髄質に比べて血流量が少なく、酸素消費量も低い。"
    ],
    "answer": 0,
    "explanation": "Aが正解。B：糸球体を通った後は「輸出細動脈」となります。C：並び順は前から「腎静脈、腎動脈、尿管」の順（V-A-U）です。D：腎血流の大部分（約90％）は皮質を流れています。（Kaibou.pdf p.130）",
    "reference": "Kaibou.pdf p.130"
  },
  {
    "id": 26,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "デルマトーム（皮膚分節）と脊髄損傷レベルの指標として、正しい組み合わせはどれか？",
    "options": [
      "乳頭の高さ ― Th10",
      "臍（へそ）の高さ ― Th4",
      "鼠径部の高さ ― L1",
      "会陰・肛門周囲 ― S1"
    ],
    "answer": 2,
    "explanation": "正解はC。乳頭はTh4、臍はTh10、肛門周囲はS4-5です。この指標は現場での損傷高位の推定に非常に重要です。（Kaibou.pdf p.86）",
    "reference": "Kaibou.pdf p.86"
  },
  {
    "id": 27,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳の言語中枢と失語症に関する記述のうち、正しいものはどれか？",
    "options": [
      "ブローカ中枢（運動性言語中枢）は、側頭葉に存在する。",
      "ウェルニッケ中枢（感覚性言語中枢）が障害されると、流暢だが意味不明な話（感覚性失語）となる。",
      "右利きの人の約50％において、言語中枢は右半球（非優位半球）に存在する。",
      "構音障害とは、大脳の言語中枢そのものが損傷されて言葉が出なくなる状態を指す。"
    ],
    "answer": 1,
    "explanation": "Bが正解。A：ブローカ野は「前頭葉」です。C：右利きの「95％以上」が左半球に言語中枢をもちます。D：構音障害は「筋肉や末梢神経」の障害であり、失語（中枢障害）とは区別されます。（Kaibou.pdf p.81）",
    "reference": "Kaibou.pdf p.81"
  },
  {
    "id": 28,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "体液の区画とその割合に関する記述として、正しいものはどれか？",
    "options": [
      "体重の約60％は水分であり、そのうち2/3が細胞外液である。",
      "血漿量は、成人男子の体重の約20％に相当する。",
      "細胞外液のうち、約3/4は間質液として、残り1/4は血漿として存在する。",
      "浮腫（むくみ）は、血漿アルブミンが急増し、血管内に水分が過剰に引き込まれることで起こる。"
    ],
    "answer": 2,
    "explanation": "Cが正解。A：細胞内液と外液の比は「2：1（内液が40％、外液が20％）」です。B：血漿は体重の約「5％」です。D：浮腫はアルブミンが「低下」して膠質浸透圧が下がることで起こります。（Kaibou.pdf p.59, p.61）",
    "reference": "Kaibou.pdf p.59, 61"
  },
  {
    "id": 29,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "酸素カスケード（酸素瀑布）における各段階の酸素分圧（PO2）の近似値として、正しいものはどれか？",
    "options": [
      "肺胞気：150mmHg ― 動脈血：100mmHg ― 毛細血管：40mmHg",
      "大気（吸入気）：150mmHg ― 肺胞気：100mmHg ― 動脈血：95mmHg",
      "動脈血：100mmHg ― 組織：40mmHg ― ミトコンドリア：15mmHg",
      "肺胞気：100mmHg ― 毛細血管：15mmHg ― ミトコンドリア：1mmHg"
    ],
    "answer": 1,
    "explanation": "Bが正解。大気(150)→肺胞(100)→動脈血(95)→毛細血管(40)→組織(15)→ミトコンドリア(1)と段階的に下がっていきます。（Kaibou.pdf p.161）",
    "reference": "Kaibou.pdf p.161"
  },
  {
    "id": 30,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓の内分泌機能に関する組み合わせとして、誤っているものはどれか？",
    "options": [
      "レニン ― 遠位尿細管の緻密斑などで血流低下を感知し、血圧上昇を図る。",
      "エリスロポエチン ― 赤血球の産生を促進し、酸素運搬能を維持する。",
      "活性型ビタミンD ― カルシウムの腸管吸収や骨代謝に関与する。",
      "アルドステロン ― 腎臓の糸球体傍細胞で産生され、直接血管を収縮させる。"
    ],
    "answer": 3,
    "explanation": "アルドステロンは「副腎皮質」で産生されるホルモンです。糸球体傍細胞で産生されるのは「レニン」です。（Kaibou.pdf p.141, p.131）",
    "reference": "Kaibou.pdf p.141, 131"
  },
  {
    "id": 31,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "椎間板の構造と機能に関する記述のうち、正しいものはどれか？",
    "options": [
      "椎間板は中心部の線維輪と、それを包む髄核から構成される。",
      "髄核は加齢とともに水分含有量が増加し、弾力性が増す。",
      "線維輪が破綻して髄核が脱出する病態を、脊柱管狭窄症と呼ぶ。",
      "椎間板は脊椎の動きに応じて、上下の椎体の回転運動や衝撃吸収を可能にする。"
    ],
    "answer": 3,
    "explanation": "椎間板は中心部の「髄核」と周囲の「線維輪」で構成されます。髄核が脱出するのは「椎間板ヘルニア」であり、脊柱管狭窄症とは区別されます。髄核の水分は加齢で減少します。 (Kaibou.pdf p.153)",
    "reference": "Kaibou.pdf p.153"
  },
  {
    "id": 32,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "膝関節の側副靱帯と十字靱帯の機能に関する記述のうち、誤っているものはどれか？",
    "options": [
      "内側側副靱帯は、膝の外反（外側への開き）を抑制する。",
      "前十字靱帯は、大腿骨に対して脛骨が前方へ移動するのを防ぐ。",
      "後十字靱帯は、関節外（滑膜外）に存在し、後方からの衝撃を和らげる。",
      "半月板は、大腿骨と脛骨の間のクッションとして衝撃を分散させる。"
    ],
    "answer": 2,
    "explanation": "十字靱帯（前・後）は関節「内」に存在する靱帯です。後十字靱帯は脛骨の後方移動を制限します。 (Kaibou.pdf p.152)",
    "reference": "Kaibou.pdf p.152"
  },
  {
    "id": 33,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "骨の微細構造において、血管や神経の通路となり、髄腔と連結している横方向の管を何と呼ぶか？",
    "options": [
      "ハバース管",
      "フォルクマン管",
      "シャーピー線維",
      "栄養孔"
    ],
    "answer": 3,
    "explanation": "骨の表面には栄養孔が存在し、そこから血管が髄腔内へと入り込みます。縦方向の管をハバース管、それを横につなぐ管をフォルクマン管と呼びますが、資料では「栄養孔」が髄腔への入口として明記されています。 (Kaibou.pdf p.152)",
    "reference": "Kaibou.pdf p.152"
  },
  {
    "id": 34,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "筋収縮のエネルギー源となるATPが分解されてエネルギーを放出する際、変化する物質はどれか？",
    "options": [
      "アデノシン一リン酸 (AMP)",
      "アデノシン二リン酸 (ADP)",
      "アセチルCoA",
      "ピルビン酸"
    ],
    "answer": 1,
    "explanation": "ATP（三リン酸）が分解されてADP（二リン酸）に変化する際に、生命活動に必要なエネルギーが放出されます。 (Kaibou.pdf p.200)",
    "reference": "Kaibou.pdf p.200"
  },
  {
    "id": 35,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "肩関節の運動において、上腕を外転させる主動作筋はどれか？",
    "options": [
      "大胸筋",
      "広背筋",
      "三角筋",
      "上腕三頭筋"
    ],
    "answer": 2,
    "explanation": "三角筋は上肢を動かし、肩関節を保護するとともに外転の主力筋です。上腕二頭筋は肘の屈曲、三頭筋は伸展を担います。 (Kaibou.pdf p.75)",
    "reference": "Kaibou.pdf p.75"
  },
  {
    "id": 36,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "「ヤコビー線」が通過する部位の説明として正しいものはどれか？",
    "options": [
      "第2・3腰椎間",
      "第4腰椎棘突起または第4・5腰椎間",
      "第12胸椎レベル",
      "仙骨上縁"
    ],
    "answer": 1,
    "explanation": "両腸骨稜を結ぶヤコビー線は、第4腰椎棘突起または第4・5腰椎間に相当し、腰椎穿刺の指標になります。 (Kaibou.pdf p.64, 73)",
    "reference": "Kaibou.pdf p.64, 73"
  },
  {
    "id": 37,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "大脳基底核の構成に関する組み合わせのうち、正しいものはどれか？",
    "options": [
      "線条体 = 被殻 ＋ 淡蒼球",
      "レンズ核 = 尾状核 ＋ 被殻",
      "線条体 = 尾状核 ＋ 被殻",
      "レンズ核 = 視床 ＋ 被殻"
    ],
    "answer": 2,
    "explanation": "尾状核と被殻を合わせて「線条体」、被殻と淡蒼球を合わせて「レンズ核」と呼びます。これらは運動調節に深く関与します。 (Kaibou.pdf p.81)",
    "reference": "Kaibou.pdf p.81"
  },
  {
    "id": 38,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "優位半球の頭頂葉連合野が障害された際に出現する「ゲルストマン症候群」の4徴に含まれないのはどれか？",
    "options": [
      "失算（計算ができない）",
      "手指失認（どの指か分からない）",
      "失語（言葉が理解できない）",
      "左右失認（左右が分からない）"
    ],
    "answer": 2,
    "explanation": "ゲルストマン症候群の4徴は「失算・失書・手指失認・左右失認」です。失語症はブローカ野やウェルニッケ野の障害で起こり、これとは区別されます。 (Kaibou.pdf p.81)",
    "reference": "Kaibou.pdf p.81"
  },
  {
    "id": 39,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳脊髄液の循環経路において、「側脳室」から「第3脳室」へ通じる孔の名称はどれか？",
    "options": [
      "マジャンディ孔",
      "ルシュカ孔",
      "モンロー孔（室間孔）",
      "中脳水道"
    ],
    "answer": 2,
    "explanation": "左右の側脳室はモンロー孔（室間孔）を経て第3脳室に通じます。第3から第4脳室へは中脳水道を通ります。 (Kaibou.pdf p.83)",
    "reference": "Kaibou.pdf p.83"
  },
  {
    "id": 40,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "自律神経系の神経伝達物質に関する記述のうち、正しいものはどれか？",
    "options": [
      "副交感神経の節前線維末端からはノルアドレナリンが放出される。",
      "交感神経の節後線維末端（汗腺を除く）からはノルアドレナリンが放出される。",
      "交感神経の節前線維末端からはアドレナリンが放出される。",
      "副交感神経の節後線維末端からはドパミンが放出される。"
    ],
    "answer": 1,
    "explanation": "交感神経の節後線維末端は「ノルアドレナリン」です。節前線維（交感・副交感とも）および副交感神経の節後線維は「アセチルコリン」です。 (Kaibou.pdf p.88)",
    "reference": "Kaibou.pdf p.88"
  },
  {
    "id": 41,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "第X脳神経である「迷走神経」が分布「しない」臓器はどれか？",
    "options": [
      "心臓",
      "肺",
      "胃・小腸",
      "膀胱・直腸"
    ],
    "answer": 3,
    "explanation": "迷走神経は胸部から腹腔内臓器（胃、腸、肝など）まで広く分布しますが、骨盤腔内の臓器（膀胱、直腸、生殖器）は支配せず、そこは仙髄由来の骨盤神経が担います。 (Kaibou.pdf p.85-86)",
    "reference": "Kaibou.pdf p.85-86"
  },
  {
    "id": 42,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "温痛覚を伝達する神経が脊髄内で交叉する部位はどこか？",
    "options": [
      "延髄の錐体",
      "脊髄に入った直後の中心管付近（白前連合）",
      "視床の中継核",
      "大脳皮質の感覚野"
    ],
    "answer": 1,
    "explanation": "温痛覚（外側脊髄視床路）は脊髄後角でニューロンを変えた後、脊髄の「中心管の腹側」で交叉して対側を上行します。運動神経（錐体路）の交叉は延髄です。 (Kaibou.pdf p.87)",
    "reference": "Kaibou.pdf p.87"
  },
  {
    "id": 43,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心拍出量を規定する因子のうち、カテコラミン（アドレナリン等）の分泌により直接的に増強されるのはどれか？",
    "options": [
      "前負荷",
      "後負荷",
      "心収縮力",
      "静脈還流量"
    ],
    "answer": 2,
    "explanation": "アドレナリンは心筋のβ1受容体に作用し、「心収縮力」と「心拍数」を直接的に増加させ、1回拍出量を増やします。 (Kaibou.pdf p.118, 115)",
    "reference": "Kaibou.pdf p.118, 115"
  },
  {
    "id": 44,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血漿の膠質浸透圧を維持し、血管内に水分を引きとめておくために最も重要な蛋白質はどれか？",
    "options": [
      "フィブリノゲン",
      "グロブリン",
      "アルブミン",
      "ヘモグロビン"
    ],
    "answer": 2,
    "explanation": "膠質浸透圧のほとんどは「アルブミン」によって生み出されます。これが低下すると血管外に水分が漏出し、浮腫（むくみ）の原因となります。 (Kaibou.pdf p.61)",
    "reference": "Kaibou.pdf p.61"
  },
  {
    "id": 45,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓の「等容弛緩期」の説明として正しいものはどれか？",
    "options": [
      "房室弁が開放し、心室に血液が流入する時期",
      "半月弁が閉鎖し、全ての弁が閉じている状態で心室圧が低下する時期",
      "心房が収縮し、心室への充満を助ける時期",
      "半月弁が開放し、血液が動脈へ駆出される時期"
    ],
    "answer": 1,
    "explanation": "等容弛緩期は、駆出が終わって「半月弁が閉じた」直後から、心室圧が心房圧より下がり「房室弁が開く」までの期間で、全ての弁が閉じています。 (Kaibou.pdf p.113)",
    "reference": "Kaibou.pdf p.113"
  },
  {
    "id": 46,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "アンギオテンシンIIの主な生理作用として「誤っている」ものはどれか？",
    "options": [
      "強力な血管収縮作用",
      "副腎皮質からのアルドステロン分泌促進",
      "心収縮力の低下作用",
      "血圧の上昇作用"
    ],
    "answer": 2,
    "explanation": "アンギオテンシンIIは「血管収縮」と「アルドステロン分泌」を通じて血圧を上げ、心収縮力も高める方向に働きます。 (Kaibou.pdf p.118)",
    "reference": "Kaibou.pdf p.118"
  },
  {
    "id": 47,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "胎生期の心房中隔に存在する孔が、生後に閉鎖してできる痕跡を何と呼ぶか？",
    "options": [
      "室間孔",
      "卵円窩",
      "静脈管",
      "動脈管索"
    ],
    "answer": 1,
    "explanation": "胎生期の「卵円孔」は、出生後に閉塞して「卵円窩」となります。 (Kaibou.pdf p.111)",
    "reference": "Kaibou.pdf p.111"
  },
  {
    "id": 48,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "成人の血液の凝固・線溶系において、フィブリンを分解して溶かす役割を担う物質はどれか？",
    "options": [
      "トロンビン",
      "プラスミン",
      "フィブリノゲン",
      "第XIII因子"
    ],
    "answer": 1,
    "explanation": "血栓を溶かす（線溶）主役は「プラスミン」です。トロンビンは逆に血液を固めるフィブリン形成を促す酵素です。 (Kaibou.pdf p.149)",
    "reference": "Kaibou.pdf p.149"
  },
  {
    "id": 49,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "呼吸の調節において、主に血中のPaO2（酸素分圧）の低下を感知して呼吸中枢に伝える受容体はどこか？",
    "options": [
      "延髄の中枢化学受容体",
      "頸動脈小体・大動脈小体の末梢化学受容体",
      "肺胞壁の伸展受容器",
      "大脳皮質の運動野"
    ],
    "answer": 1,
    "explanation": "「末梢化学受容体」はPaO2の低下に敏感です。一方、「中枢化学受容体（延髄）」はPaCO2の上昇（pHの低下）を主に感知します。 (Kaibou.pdf p.107, 162)",
    "reference": "Kaibou.pdf p.107, 162"
  },
  {
    "id": 50,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺胞内の「表面活性物質（サーファクタント）」が減少した場合に起こる減少として正しいのはどれか？",
    "options": [
      "肺胞の拡張が容易になる。",
      "肺胞の表面張力が増大し、肺胞が虚脱しやすくなる。",
      "ガス交換の面積が拡大する。",
      "気道分泌物（痰）が減少する。"
    ],
    "answer": 1,
    "explanation": "サーファクタントは表面張力を下げて肺胞の虚脱を防いでいます。これが欠乏すると肺胞がつぶれ（肺虚脱）、ガス交換が障害されます。 (Kaibou.pdf p.104)",
    "reference": "Kaibou.pdf p.104"
  },
  {
    "id": 51,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "成人の気管内径および長さの近似値として正しい組み合わせはどれか？",
    "options": [
      "内径：約5mm、長さ：約5cm",
      "内径：約16.5mm、長さ：約10cm",
      "内径：約25mm、長さ：約20cm",
      "内径：約10mm、長さ：約15cm"
    ],
    "answer": 1,
    "explanation": "成人の気管は内径約16.5mm、長さ約10cmです。 (Kaibou.pdf p.100)",
    "reference": "Kaibou.pdf p.100"
  },
  {
    "id": 52,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "「ヘーリング・ブロイエル反射」の役割として適切なものはどれか？",
    "options": [
      "血圧低下時に心拍数を増加させる反射",
      "吸気時に肺が過度に膨らむのを防ぎ、呼気に切り替える反射",
      "気道に異物が入った際に咳を誘発する反射",
      "酸塩基平衡を維持するために換気量を増やす反射"
    ],
    "answer": 1,
    "explanation": "肺の伸展受容器が刺激され、過膨張を防ぐために吸気を抑制し呼気を開始させる反射です。 (Kaibou.pdf p.107)",
    "reference": "Kaibou.pdf p.107"
  },
  {
    "id": 53,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "酸素カスケードにおいて、組織レベル（毛細血管付近）の酸素分圧はどの程度と推定されているか？",
    "options": [
      "約100 mmHg",
      "約40 mmHg",
      "約15 mmHg",
      "約1 mmHg"
    ],
    "answer": 2,
    "explanation": "毛細血管のPO2は約40mmHg、そこから細胞表面付近（組織）では約15mmHgまで低下し、ミトコンドリア内では約1mmHgとなります。 (Kaibou.pdf p.161-162)",
    "reference": "Kaibou.pdf p.161-162"
  },
  {
    "id": 54,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "ヘモグロビン1gが最大に結合できる酸素の量はどれか？",
    "options": [
      "0.5 mL",
      "1.34 mL",
      "15 mL",
      "20 mL"
    ],
    "answer": 1,
    "explanation": "ヘモグロビン1gは最大1.34mLの酸素と結合します。血液100mLあたりのHb量を掛けることで酸素含量が求められます。 (Kaibou.pdf p.106, 145)",
    "reference": "Kaibou.pdf p.106, 145"
  },
  {
    "id": 55,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓の「糸球体濾過」において、濾過される物質の分子量の上限はおよそどれくらいか？",
    "options": [
      "約5,000以下",
      "約70,000以下",
      "約150,000以下",
      "上限はない"
    ],
    "answer": 1,
    "explanation": "糸球体毛細血管からは分子量約70,000以下の物質が濾過されます。アルブミン（分子量約66,000）は境界線上にあるため、健康な腎臓ではほとんど濾過されません。 (Kaibou.pdf p.130)",
    "reference": "Kaibou.pdf p.130"
  },
  {
    "id": 56,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "近位尿細管における「原尿」の再吸収率として、正しいものはどれか？",
    "options": [
      "約10〜20％",
      "約50％",
      "約80〜85％",
      "99％以上"
    ],
    "answer": 2,
    "explanation": "近位尿細管で原尿の約80〜85％が再吸収されます。残りが遠位尿細管や集合管で微調整され、最終的な「尿」として排出されるのは原尿全体の1％未満です。 (Kaibou.pdf p.131)",
    "reference": "Kaibou.pdf p.131"
  },
  {
    "id": 57,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓の解剖において、腎門部を通る構造物のうち「最も前方（腹側）」に位置するものはどれか？",
    "options": [
      "腎動脈",
      "腎静脈",
      "尿管",
      "腎杯"
    ],
    "answer": 1,
    "explanation": "腎門部では前から順に「腎静脈、腎動脈、尿管」の順で並んでいます（V-A-U）。 (Kaibou.pdf p.130)",
    "reference": "Kaibou.pdf p.130"
  },
  {
    "id": 58,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "抗利尿ホルモン（ADH）が作用する主な部位はどこか？",
    "options": [
      "糸球体",
      "近位尿細管",
      "遠位尿細管および集合管",
      "ボーマン嚢"
    ],
    "answer": 2,
    "explanation": "ADH（バソプレシン）は遠位尿細管や集合管に作用し、水の透過性を高めて再吸収を促進し、尿を濃縮させます。 (Kaibou.pdf p.131)",
    "reference": "Kaibou.pdf p.131"
  },
  {
    "id": 59,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "正常な健康成人の「糸球体濾過量 (GFR)」は、1分間におよそ何mLか？",
    "options": [
      "1.5 mL",
      "60 mL",
      "120 mL",
      "1,000 mL"
    ],
    "answer": 2,
    "explanation": "健康成人のGFRは約120mL/分です。1日に換算すると約170〜180Lもの原尿が作られています。 (Kaibou.pdf p.130-131)",
    "reference": "Kaibou.pdf p.130-131"
  },
  {
    "id": 60,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "尿路において「生理的狭窄部（石などが詰まりやすい場所）」に含まれないのはどれか？",
    "options": [
      "腎盂尿管移行部",
      "総腸骨血管交差部",
      "尿管中部の腎下極付近",
      "膀胱壁内部（尿管膀胱移行部）"
    ],
    "answer": 2,
    "explanation": "尿管の生理的狭窄部は「腎盂尿管移行部」「総腸骨血管交差部」「膀胱壁内部」の3カ所です。 (Kaibou.pdf p.131, 140)",
    "reference": "Kaibou.pdf p.131, 140"
  },
   {
    "id": 61,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "成人の長管骨において、骨の「長さ」の成長を司る部位はどれか？",
    "options": [
      "骨膜",
      "骨端軟骨（成長板）",
      "ハバース管",
      "骨髄腔"
    ],
    "answer": 1,
    "explanation": "骨端軟骨（成長板）は骨の長さの成長に関与しますが、成人では骨化して消失します。一方、骨膜は骨の「太さ」の成長に関与し、成人でも機能が維持されます。（Kaibou.pdf p.152）",
    "reference": "Kaibou.pdf p.152"
  },
  {
    "id": 62,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳神経とその分布の組み合わせとして、誤っているものはどれか？",
    "options": [
      "第V脳神経（三叉神経） ― 咀嚼筋",
      "第VII脳神経（顔面神経） ― 舌の前2/3の味覚",
      "第IX脳神経（舌咽神経） ― 胸腹部内臓（骨盤腔を除く）",
      "第XII脳神経（舌下神経） ― 舌筋"
    ],
    "answer": 2,
    "explanation": "胸腹部内臓（骨盤腔を除く）に広く分布するのは「第X脳神経（迷走神経）」です。第IX脳神経（舌咽神経）は、主に咽頭や舌の後ろ1/3の味覚、耳下腺などを支配します。（Kaibou.pdf p.85-86）",
    "reference": "Kaibou.pdf p.85-86"
  },
  {
    "id": 63,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心拍出量を規定する因子のうち、末梢血管抵抗や大動脈弁狭窄など、心室が血液を送り出す際に受ける抵抗を何と呼ぶか？",
    "options": [
      "前負荷",
      "後負荷",
      "心拍数",
      "心収縮力"
    ],
    "answer": 1,
    "explanation": "後負荷は心室が収縮時に打ち勝つべき抵抗を指します。高血圧や血管収縮、弁狭窄はこの負荷を増大させ、心不全の悪化要因となります。（Kaibou.pdf p.115）",
    "reference": "Kaibou.pdf p.115"
  },
  {
    "id": 64,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺胞において、表面活性物質（サーファクタント）を分泌し、肺胞の虚脱を防止している細胞はどれか？",
    "options": [
      "I型肺胞細胞",
      "II型肺胞細胞",
      "肺胞マクロファージ",
      "杯細胞"
    ],
    "answer": 1,
    "explanation": "II型肺胞細胞はサーファクタントを分泌して表面張力を下げ、肺胞の虚脱を防ぎます。I型肺胞細胞はガス交換を担う非常に薄い細胞です。（Kaibou.pdf p.104）",
    "reference": "Kaibou.pdf p.104"
  },
  {
    "id": 65,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎機能に関連するホルモンのうち、骨髄に働きかけて赤血球の産生を促進するものはどれか？",
    "options": [
      "レニン",
      "アンギオテンシンII",
      "エリスロポエチン",
      "アルドステロン"
    ],
    "answer": 2,
    "explanation": "エリスロポエチンは腎臓の尿細管間質細胞から分泌され、赤血球の増生を促します。腎不全による貧血はこの産生低下が主な原因です。（Kaibou.pdf p.146）",
    "reference": "Kaibou.pdf p.146"
  },
  {
    "id": 66,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "成人の赤色骨髄（造血機能をもつ骨髄）が主として残存している部位はどれか？",
    "options": [
      "大腿骨骨幹部",
      "上腕骨骨幹部",
      "扁平骨（胸骨・腸骨など）",
      "橈骨骨幹部"
    ],
    "answer": 2,
    "explanation": "成人の長管骨の骨髄は黄色骨髄に置き換わりますが、胸骨、肋骨、脊椎、腸骨などの扁平骨には赤色骨髄が残り、造血が行われます。（Kaibou.pdf p.147, 152）",
    "reference": "Kaibou.pdf p.147, 152"
  },
  {
    "id": 67,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "自律神経の最高中枢であり、体温調節、食欲、水分代謝などを統合的に調節している脳の部位はどこか？",
    "options": [
      "視床",
      "視床下部",
      "大脳基底核",
      "中脳"
    ],
    "answer": 1,
    "explanation": "間脳の視床下部は自律神経系の司令塔であり、生命維持に不可欠なホメオスターシスの調節を行っています。（Kaibou.pdf p.81）",
    "reference": "Kaibou.pdf p.81"
  },
  {
    "id": 68,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血液の膠質浸透圧を維持し、血管内に水分を留めるために最も重要な役割を果たす血漿蛋白質はどれか？",
    "options": [
      "フィブリノゲン",
      "グロブリン",
      "アルブミン",
      "プロトロンビン"
    ],
    "answer": 2,
    "explanation": "膠質浸透圧の大部分はアルブミンによって生み出されます。これが低下すると血管外に水分が漏出し、浮腫の原因となります。（Kaibou.pdf p.61, 144）",
    "reference": "Kaibou.pdf p.61, 144"
  },
  {
    "id": 69,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "酸素解離曲線が「右方シフト」する（ヘモグロビンが酸素を離しやすくなる）条件として、正しいものはどれか？",
    "options": [
      "体温の低下",
      "pHの上昇（アルカローシス）",
      "二酸化炭素分圧（PCO2）の上昇",
      "2,3-DPGの減少"
    ],
    "answer": 2,
    "explanation": "体温上昇、PCO2上昇、pH低下（アシドーシス）などの状況下では、組織への酸素供給を優先するため、曲線は右方へシフトします。（Kaibou.pdf p.106）",
    "reference": "Kaibou.pdf p.106"
  },
  {
    "id": 70,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "成人の腎臓に流入する血流量は、心拍出量のおよそ何％に相当するか？",
    "options": [
      "約5％",
      "約15％",
      "約20〜25％",
      "約50％"
    ],
    "answer": 2,
    "explanation": "腎臓には1分間に約1〜1.2L、すなわち心拍出量の約20〜25％という極めて豊富な血液が流れています。（Kaibou.pdf p.130）",
    "reference": "Kaibou.pdf p.130"
  },
  {
    "id": 71,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "筋収縮のエネルギー効率に関する記述として、正しいものはどれか？",
    "options": [
      "約100%が力学的な運動に変換される",
      "約80%が熱に、20%が運動に変換される",
      "約50%以下が運動に利用され、残りの半分以上が熱になる",
      "熱は産生されない"
    ],
    "answer": 2,
    "explanation": "筋収縮のエネルギー効率は50%以下であり、残りの50%以上は熱に変わります。このため、筋肉は体熱産生の主役（約85%）となります。（Kaibou.pdf p.151）",
    "reference": "Kaibou.pdf p.151"
  },
  {
    "id": 72,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "言語中枢のうち、障害されると言葉の意味は理解できるが流暢に話せない「運動性失語」を呈する部位はどこか？",
    "options": [
      "ウェルニッケ中枢（側頭葉）",
      "ブローカ中枢（前頭葉）",
      "中心後回（頭頂葉）",
      "角回"
    ],
    "answer": 1,
    "explanation": "ブローカ中枢（運動性言語中枢）は前頭葉にあり、損傷すると言葉を組み立てて発することが困難になります。（Kaibou.pdf p.81）",
    "reference": "Kaibou.pdf p.81"
  },
  {
    "id": 73,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "胎生期の心房中隔にある「卵円孔」の痕跡として、成人の心臓に認められる構造の名称はどれか？",
    "options": [
      "室間孔",
      "卵円窩",
      "動脈管索",
      "静脈管索"
    ],
    "answer": 1,
    "explanation": "出生とともに卵円孔は閉鎖し、その跡は卵円窩として残ります。これが開存したままの状態を卵円孔開存と呼びます。（Kaibou.pdf p.111）",
    "reference": "Kaibou.pdf p.111"
  },
  {
    "id": 74,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "気管分岐部における「右主気管支」の解剖学的特徴として、正しいものはどれか？",
    "options": [
      "左より細くて長い",
      "正中線に対する角度が約45度である",
      "左より太くて短く、垂直に近い（20〜25度）",
      "常に右肺上葉へ直接つながる"
    ],
    "answer": 2,
    "explanation": "右主気管支は太く短く、角度が急であるため、誤嚥した異物や挿管チューブが入り込みやすい特性があります。（Kaibou.pdf p.101）",
    "reference": "Kaibou.pdf p.101"
  },
  {
    "id": 75,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓のネフロンにおいて、糸球体濾過により生じた「原尿」は1日に約何リットル作られるか？",
    "options": [
      "約1.5L",
      "約10L",
      "約180L",
      "約500L"
    ],
    "answer": 2,
    "explanation": "1分間に約120mL、1日に換算すると約180Lの原尿が作られます。その99％以上が再吸収され、最終的な尿となるのは約1.5Lです。（Kaibou.pdf p.130-131）",
    "reference": "Kaibou.pdf p.130-131"
  },
  {
    "id": 76,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "脊柱の構造において、両側の腸骨稜の最高点を結ぶ「ヤコビー線」が通過する高さとして正しいのはどれか？",
    "options": [
      "第12胸椎棘突起",
      "第2腰椎棘突起",
      "第4腰椎棘突起（または第4・5腰椎間）",
      "仙骨上縁"
    ],
    "answer": 2,
    "explanation": "ヤコビー線は第4腰椎レベルを通り、腰椎穿刺や脊椎損傷の判定における重要な解剖学的指標となります。（Kaibou.pdf p.64, 73, 154）",
    "reference": "Kaibou.pdf p.64, 73, 154"
  },
  {
    "id": 77,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳脊髄液（髄液）の循環経路について、正しい順序はどれか？",
    "options": [
      "側脳室 → 第3脳室 → 第4脳室 → くも膜下腔 → 静脈",
      "第4脳室 → 側脳室 → 第3脳室 → 動脈",
      "脈絡叢 → 硬膜下腔 → 脊柱管 → 脳室",
      "側脳室 → マジャンディ孔 → 第3脳室 → 静脈"
    ],
    "answer": 0,
    "explanation": "髄液は脈絡叢で産生され、脳室系を通ってくも膜下腔へ出た後、くも膜顆粒から静脈（静脈洞）へ吸収されます。（Kaibou.pdf p.83, 84）",
    "reference": "Kaibou.pdf p.83, 84"
  },
  {
    "id": 78,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓の伝導系において、房室結節を通過した興奮が次に伝わる部位はどこか？",
    "options": [
      "洞結節",
      "右脚・左脚",
      "ヒス束",
      "プルキンエ線維"
    ],
    "answer": 2,
    "explanation": "興奮は、洞結節 → 房室結節 → ヒス束 → 右脚・左脚 → プルキンエ線維の順に伝わります。（Kaibou.pdf p.112）",
    "reference": "Kaibou.pdf p.112"
  },
  {
    "id": 79,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "大気中の酸素分圧（約150mmHg）が、肺胞内で約100mmHgまで低下する直接の要因はどれか？",
    "options": [
      "大動脈の圧迫",
      "水蒸気圧（加湿）と二酸化炭素の排出",
      "窒素の増加",
      "ヘモグロビンとの結合"
    ],
    "answer": 1,
    "explanation": "吸入気は気道で加湿され（水蒸気圧47mmHg）、さらに肺胞内で血液から排出された二酸化炭素が混ざるため、酸素分圧は低下します。（Kaibou.pdf p.105）",
    "reference": "Kaibou.pdf p.105"
  },
  {
    "id": 80,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "尿管に存在する3箇所の生理的狭窄部のうち、石が詰まりやすい「総腸骨血管交差部」は何番目の狭窄部か？",
    "options": [
      "1番目（起始部）",
      "2番目（中間部）",
      "3番目（終末部）",
      "狭窄部ではない"
    ],
    "answer": 1,
    "explanation": "尿管には、腎盂尿管移行部（1番目）、総腸骨血管交差部（2番目）、膀胱壁内部（3番目）の3つの生理的狭窄部があります。（Kaibou.pdf p.131, 140）",
    "reference": "Kaibou.pdf p.131, 140"
  },
  {
    "id": 81,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "成人の脊柱において、「胸椎」の数として正しいものはどれか？",
    "options": [
      "7個",
      "12個",
      "5個",
      "1個"
    ],
    "answer": 1,
    "explanation": "脊柱は頸椎7個、胸椎12個、腰椎5個、仙骨（癒合）、尾骨で構成されます。胸椎にはそれぞれに肋骨が付着します。（Kaibou.pdf p.153）",
    "reference": "Kaibou.pdf p.153"
  },
  {
    "id": 82,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "瞳孔の調節について、交感神経の刺激によって起こる反応はどれか？",
    "options": [
      "縮瞳（瞳孔括約筋の収縮）",
      "散瞳（瞳孔散大筋の収縮）",
      "調節反射の減弱",
      "変化しない"
    ],
    "answer": 1,
    "explanation": "交感神経が興奮すると瞳孔散大筋が収縮し、散瞳が起こります。これはショックや緊張時の生体反応です。（Kaibou.pdf p.58, 92）",
    "reference": "Kaibou.pdf p.58, 92"
  },
  {
    "id": 83,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "頸動脈洞や大動脈弓に存在し、血圧の急激な変化を感知して血管運動中枢へ情報を送るセンサーを何というか？",
    "options": [
      "化学受容体",
      "圧受容体（バロレセプター）",
      "冷覚受容器",
      "浸透圧受容器"
    ],
    "answer": 1,
    "explanation": "圧受容体は血圧を常に監視し、血圧低下時には反射的に交感神経を興奮させて血圧を維持しようとします（圧受容体反射）。（Kaibou.pdf p.117）",
    "reference": "Kaibou.pdf p.117"
  },
  {
    "id": 84,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "正常な呼吸において、吸気（息を吸う）に際して起こる胸腔内圧の変化はどれか？",
    "options": [
      "大気圧と同じになる",
      "陽圧になる",
      "陰圧の程度が大きくなる（さらに低くなる）",
      "一定に保たれる"
    ],
    "answer": 2,
    "explanation": "吸気筋（横隔膜・外肋間筋）の収縮により胸郭が広がると、胸腔内圧の陰圧が強まり、肺が受動的に膨らみます。（Kaibou.pdf p.103）",
    "reference": "Kaibou.pdf p.103"
  },
  {
    "id": 85,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "抗利尿ホルモン（ADH）の欠乏や感受性低下により、大量の低張尿が排出される疾患はどれか？",
    "options": [
      "糖尿病",
      "尿崩症",
      "痛風",
      "急性腎不全"
    ],
    "answer": 1,
    "explanation": "ADHが機能しないと腎臓での水分再吸収ができなくなり、大量の尿が出る「尿崩症」となります。（Kaibou.pdf p.140 参照）",
    "reference": "Kaibou.pdf p.140"
  },
  {
    "id": 86,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "筋組織のうち、唯一「意志で動かせる（随意筋）」のはどれか？",
    "options": [
      "骨格筋",
      "心筋",
      "平滑筋",
      "血管壁の筋肉"
    ],
    "answer": 0,
    "explanation": "骨格筋は体性神経支配の随意筋です。心筋と平滑筋（内臓筋）は自律神経支配の不随意筋です。（Kaibou.pdf p.57）",
    "reference": "Kaibou.pdf p.57"
  },
  {
    "id": 87,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "大脳の「頭頂葉」に存在し、身体の反対側の皮膚感覚や深部感覚を受け取る場所を何というか？",
    "options": [
      "運動野",
      "体性感覚野",
      "視覚野",
      "聴覚野"
    ],
    "answer": 1,
    "explanation": "中心溝のすぐ後ろ（中心後回）にある体性感覚野が、全身からの感覚情報を認識します。（Kaibou.pdf p.81）",
    "reference": "Kaibou.pdf p.81"
  },
  {
    "id": 88,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "左心室を養う冠動脈の血流が、最も増大するタイミングはいつか？",
    "options": [
      "等容収縮期",
      "駆出期",
      "拡張期",
      "心房収縮期"
    ],
    "answer": 2,
    "explanation": "左室心筋は分厚いため、収縮期には血管が圧迫されて血流が著減します。心筋が緩む「拡張期」に最も多くの血液が流れます。（Kaibou.pdf p.114）",
    "reference": "Kaibou.pdf p.114"
  },
  {
    "id": 89,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "呼吸の「死腔（しくう）」についての説明として、正しいものはどれか？",
    "options": [
      "肺胞の中でガス交換が止まった場所",
      "鼻腔から終末細気管支までの、ガス交換に関与しない通路",
      "酸素を全く含まない空気の塊",
      "呼気の中の二酸化炭素のこと"
    ],
    "answer": 1,
    "explanation": "ガス交換を行わない導管部を解剖学的死腔と呼びます。1回の換気量のうち、実際に肺胞まで届く空気はここを除いた分となります。（Kaibou.pdf p.107）",
    "reference": "Kaibou.pdf p.107"
  },
  {
    "id": 90,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "糸球体濾過（GFR）の過程で、健康な腎臓において「濾過されない（尿に出ない）」物質はどれか？",
    "options": [
      "水",
      "ブドウ糖（グルコース）",
      "蛋白質（アルブミンなど）",
      "ナトリウムイオン"
    ],
    "answer": 2,
    "explanation": "蛋白質や血球は分子量が大きいため、糸球体のフィルターを通過できません。蛋白尿が出るのはこのバリア機能が壊れた時です。（Kaibou.pdf p.130）",
    "reference": "Kaibou.pdf p.130"
  },
  {
    "id": 91,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "関節の「球関節」に分類され、多軸性に自由な動きができるものはどれか？",
    "options": [
      "肘関節",
      "膝関節",
      "股関節",
      "指の間関節（指節間関節）"
    ],
    "answer": 2,
    "explanation": "股関節や肩関節は球関節であり、屈曲・伸展、内転・外転、旋回など自由度の高い動きが可能です。（Kaibou.pdf p.152）",
    "reference": "Kaibou.pdf p.152"
  },
  {
    "id": 92,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "第VIII脳神経（内耳神経）が司っている機能の組み合わせとして正しいのはどれか？",
    "options": [
      "視覚と眼球運動",
      "聴覚と平衡感覚",
      "顔面の知覚と味覚",
      "嚥下と発声"
    ],
    "answer": 1,
    "explanation": "内耳神経は、音を聞く「蝸牛神経」と、バランスを保つ「前庭神経」から構成されています。（Kaibou.pdf p.85）",
    "reference": "Kaibou.pdf p.85"
  },
  {
    "id": 93,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "平均動脈圧を心拍出量（CO）と全末梢血管抵抗（SVR）の関係で示した式として、正しいものはどれか？",
    "options": [
      "平均血圧 = CO ÷ SVR",
      "平均血圧 = CO × SVR",
      "平均血圧 = CO ＋ SVR",
      "平均血圧 = SVR ÷ CO"
    ],
    "answer": 1,
    "explanation": "血圧はポンプの流量（CO）と、ホースの抵抗（SVR）の掛け算で決まります。ショック時にはこれらが低下して血圧が下がります。（Kaibou.pdf p.117）",
    "reference": "Kaibou.pdf p.117"
  },
  {
    "id": 94,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "延髄にある「中枢化学受容体」が最も敏感に反応し、呼吸を促す刺激となる因子はどれか？",
    "options": [
      "酸素分圧の低下（低酸素）",
      "二酸化炭素分圧の上昇（PaCO2上昇）",
      "体温の低下",
      "血圧の上昇"
    ],
    "answer": 1,
    "explanation": "中枢化学受容体はCO2濃度（およびpH変化）に非常に敏感です。PaCO2が上昇すると呼吸中枢を刺激して換気量を増やします。（Kaibou.pdf p.107）",
    "reference": "Kaibou.pdf p.107"
  },
  {
    "id": 95,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓の「腎門部」において、血管や管が並んでいる順序として、前方（腹側）から正しいものはどれか？",
    "options": [
      "腎動脈、腎静脈、尿管",
      "腎静脈、腎動脈、尿管",
      "尿管、腎動脈、腎静脈",
      "腎静脈、尿管、腎動脈"
    ],
    "answer": 1,
    "explanation": "腎門部では腹側から「静脈（V）→ 動脈（A）→ 尿管（U）」の順に重なっています。外傷時の手術や解剖学的理解に必須の知識です。（Kaibou.pdf p.130）",
    "reference": "Kaibou.pdf p.130"
  },
  {
    "id": 96,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "骨の成分として貯蔵されており、全身の約99％が骨に存在するミネラルはどれか？",
    "options": [
      "ナトリウム",
      "カリウム",
      "カルシウム",
      "鉄"
    ],
    "answer": 2,
    "explanation": "骨はカルシウムの巨大な貯蔵庫であり、血中カルシウム濃度を維持するための調整弁としての役割も担っています。（Kaibou.pdf p.152）",
    "reference": "Kaibou.pdf p.152"
  },
  {
    "id": 97,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脊髄の横断面において、感覚神経の細胞体が集まっている「感覚の後継ぎ」となる部位はどこか？",
    "options": [
      "前角",
      "後角",
      "側角",
      "白質"
    ],
    "answer": 1,
    "explanation": "脊髄灰白質の「後角」には感覚神経の細胞が集まります。前角には運動神経、側角には自律神経の細胞があります。（Kaibou.pdf p.82）",
    "reference": "Kaibou.pdf p.82"
  },
  {
    "id": 98,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "「全血液量」は体重の約何％を占めるか？",
    "options": [
      "約1％",
      "約8％",
      "約20％",
      "約50％"
    ],
    "answer": 1,
    "explanation": "血液量は体重の約8%（約1/13）です。体重60kgの人なら約5Lとなり、これを知ることで出血の重症度を推定できます。（Kaibou.pdf p.108, 143）",
    "reference": "Kaibou.pdf p.108, 143"
  },
  {
    "id": 99,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺を覆う「臓側胸膜」と胸壁の内面を覆う「壁側胸膜」の間にある、わずかな空間の名称はどれか？",
    "options": [
      "心膜腔",
      "腹膜腔",
      "胸膜腔",
      "縦隔"
    ],
    "answer": 2,
    "explanation": "胸膜腔は通常は密着していますが、空気が入れば気胸、血が溜まれば血胸となります。（Kaibou.pdf p.102）",
    "reference": "Kaibou.pdf p.102"
  },
  {
    "id": 100,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓が位置している「第12胸椎〜第3腰椎」付近の解剖学的領域（空間）を何というか？",
    "options": [
      "腹膜腔",
      "後腹膜腔",
      "胸腔",
      "骨盤腔"
    ],
    "answer": 1,
    "explanation": "腎臓、膵臓、尿管などは腹膜の後ろ側にある「後腹膜腔」に存在します。腹膜炎とは別の症状の出方をすることがあります。（Kaibou.pdf p.130, 136）",
    "reference": "Kaibou.pdf p.130, 136"
  },
  {
    "id": 101,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "筋収縮の基本単位において、細いフィラメントである「アクチン」と結合し、滑り込み運動を行う太いフィラメントはどれか？",
    "options": [
      "ミオシン",
      "コラーゲン",
      "エラスチン",
      "ケラチン"
    ],
    "answer": 0,
    "explanation": "ミオシンとアクチンが重なり合い、滑り込むことで筋肉は収縮します。これを「滑走説」と呼びます。（Kaibou.pdf p.151）",
    "reference": "Kaibou.pdf p.151"
  },
  {
    "id": 102,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "「第III脳神経（動眼神経）」が支配「していない」のはどれか？",
    "options": [
      "上直筋",
      "瞳孔括約筋",
      "外直筋",
      "眼瞼挙筋"
    ],
    "answer": 2,
    "explanation": "外直筋は「第VI脳神経（外転神経）」が支配します。動眼神経が麻痺すると散瞳、眼瞼下垂、眼球運動障害が起きます。（Kaibou.pdf p.84, 85）",
    "reference": "Kaibou.pdf p.84, 85"
  },
  {
    "id": 103,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "静脈が「容量血管」と呼ばれる理由はどれか？",
    "options": [
      "血圧が非常に高いから",
      "全血液量の約60〜70％を貯留できるから",
      "血管壁が非常に厚いから",
      "心臓から直接血液を受け取るから"
    ],
    "answer": 1,
    "explanation": "静脈は伸展性が高く、低圧で大量の血液を貯めることができます。ショック時に足を上げるのは、この「貯金」を心臓に戻すためです。（Kaibou.pdf p.116）",
    "reference": "Kaibou.pdf p.116"
  },
  {
    "id": 104,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺胞でのガス交換において、酸素が大気からミトコンドリアまで段階的に分圧が下がっていく現象を何というか？",
    "options": [
      "酸素解離",
      "酸素カスケード（瀑布）",
      "ヘンリーの法則",
      "死腔換気"
    ],
    "answer": 1,
    "explanation": "酸素が高い方から低い方へ滝のように流れることを酸素カスケードと呼びます。最終的なミトコンドリア内分圧は約1mmHgです。（Kaibou.pdf p.105, 161）",
    "reference": "Kaibou.pdf p.105, 161"
  },
  {
    "id": 105,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓が血液の「酸塩基平衡」を調節する際に主に行っていることはどれか？",
    "options": [
      "二酸化炭素を尿に溶かす",
      "水素イオン（酸）を排泄し、炭酸水素イオンを再吸収する",
      "酸素を尿に含める",
      "糖分をアルカリに変える"
    ],
    "answer": 1,
    "explanation": "腎臓は体内の不要な酸を捨て、アルカリの予備分を回収することで、体液をpH7.4付近の弱アルカリ性に保ちます。（Kaibou.pdf p.61, 131）",
    "reference": "Kaibou.pdf p.61, 131"
  },
  {
    "id": 106,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "脊柱の「S字カーブ（生理的彎曲）」において、前方に凸（前弯）している部位の組み合わせはどれか？",
    "options": [
      "頸椎と胸椎",
      "胸椎と腰椎",
      "頸椎と腰椎",
      "胸椎と仙骨"
    ],
    "answer": 2,
    "explanation": "頸椎と腰椎は前弯、胸椎と仙骨は後弯しています。このカーブが歩行時などの衝撃を吸収するクッションとなります。（Kaibou.pdf p.154）",
    "reference": "Kaibou.pdf p.154"
  },
  {
    "id": 107,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "「第X脳神経（迷走神経）」が支配していない臓器はどれか？",
    "options": [
      "心臓",
      "胃",
      "肝臓",
      "膀胱"
    ],
    "answer": 3,
    "explanation": "迷走神経は腹腔内の多くの臓器を支配しますが、骨盤腔内の臓器（膀胱、直腸、生殖器）は支配せず、そこは骨盤神経が担当します。（Kaibou.pdf p.85-86）",
    "reference": "Kaibou.pdf p.85-86"
  },
  {
    "id": 108,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓の「僧帽弁」はどことどこの間にあるか？",
    "options": [
      "右心房と右心室の間",
      "左心房と左心室の間",
      "右心室と肺動脈の間",
      "左心室と大動脈の間"
    ],
    "answer": 1,
    "explanation": "左側の房室弁が僧帽弁（二尖弁）、右側が三尖弁です。左心系の高圧に耐える重要な弁です。（Kaibou.pdf p.111）",
    "reference": "Kaibou.pdf p.111"
  },
  {
    "id": 109,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "気管支の「線毛（せんもう）」が細菌やゴミを外へ運び出す仕組みを何というか？",
    "options": [
      "貪食作用",
      "線毛運動",
      "拡散運動",
      "換気応答"
    ],
    "answer": 1,
    "explanation": "粘液で捕らえた異物を線毛が「ほうき」のように動いて口の方へ運び出します。喫煙などでこの機能は低下します。（Kaibou.pdf p.101）",
    "reference": "Kaibou.pdf p.101"
  },
  {
    "id": 110,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "血液の「浸透圧」を決定する、最も主要な細胞外液の電解質はどれか？",
    "options": [
      "カリウム",
      "カルシウム",
      "ナトリウム",
      "マグネシウム"
    ],
    "answer": 2,
    "explanation": "浸透圧は「塩分（ナトリウム）」の濃度にほぼ依存します。ナトリウム濃度が狂うと、細胞が膨らんだり縮んだりして致命的になります。（Kaibou.pdf p.62, 162）",
    "reference": "Kaibou.pdf p.62, 162"
  },
  {
    "id": 111,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "筋肉を骨に付着させ、筋収縮の力を伝える強靭な「動的」支持機構はどれか？",
    "options": [
      "靱帯",
      "腱",
      "軟骨",
      "関節包"
    ],
    "answer": 1,
    "explanation": "腱は筋肉の力を骨に伝えます。靱帯は骨と骨を繋ぐ「静的」なバンドであり、役割が異なります。（Kaibou.pdf p.153）",
    "reference": "Kaibou.pdf p.153"
  },
  {
    "id": 112,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "自律神経の「副交感神経」が優位になった際に起こる反応はどれか？",
    "options": [
      "心拍数の増加",
      "血圧の上昇",
      "消化管の運動促進",
      "瞳孔の散大"
    ],
    "answer": 2,
    "explanation": "副交感神経は「休息と消化」の神経です。食事中や睡眠中に活発になり、内臓の働きを高めます。（Kaibou.pdf p.59, 88）",
    "reference": "Kaibou.pdf p.59, 88"
  },
  {
    "id": 113,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓の刺激伝導系において、通常の「歩調取り（ペースメーカー）」としての役割を果たしているのはどこか？",
    "options": [
      "房室結節",
      "ヒス束",
      "洞結節",
      "プルキンエ線維"
    ],
    "answer": 2,
    "explanation": "右心房の上部にある洞結節が、1分間に約60〜80回のリズムで電気信号を作り出し、心臓全体を動かしています。（Kaibou.pdf p.112）",
    "reference": "Kaibou.pdf p.112"
  },
  {
    "id": 114,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "成人の気管の内径はおよそどのくらいか？",
    "options": [
      "約5mm",
      "約16.5mm",
      "約30mm",
      "約50mm"
    ],
    "answer": 1,
    "explanation": "成人の気管は内径約1.5〜2.0cm（約16.5mm）、長さは約10cmです。小児ではこれよりずっと細くなります。（Kaibou.pdf p.100）",
    "reference": "Kaibou.pdf p.100"
  },
  {
    "id": 115,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓が分泌する「レニン」が最終的に引き起こす主な生理反応はどれか？",
    "options": [
      "血圧の低下",
      "血圧の上昇",
      "尿量の増加",
      "血糖値の上昇"
    ],
    "answer": 1,
    "explanation": "レニンはRAA系を活性化させ、血管を収縮させ、塩分と水を溜め込むことで血圧を上げようとします。（Kaibou.pdf p.131）",
    "reference": "Kaibou.pdf p.131"
  },
  {
    "id": 116,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "骨の内部にある網目状の構造で、衝撃を分散させ、代謝も活発な部分はどこか？",
    "options": [
      "皮質骨",
      "海綿骨",
      "骨膜",
      "栄養孔"
    ],
    "answer": 1,
    "explanation": "海綿骨は「骨梁（こつりょう）」というジャングルジムのような構造で、軽くて丈夫、かつ表面積が広いため成分の入れ替わりが速いのが特徴です。（Kaibou.pdf p.152）",
    "reference": "Kaibou.pdf p.152"
  },
  {
    "id": 117,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳の「小脳」が障害された際に出現する典型的な症状はどれか？",
    "options": [
      "失語症（言葉が出ない）",
      "半身不随（筋力の低下）",
      "運動失調（ふらつき、スムーズに動けない）",
      "認知症"
    ],
    "answer": 2,
    "explanation": "小脳は「運動の微調整」を担当しているため、壊れるとバランスを崩したり、手が震えたりといった運動失調が起きます。（Kaibou.pdf p.81）",
    "reference": "Kaibou.pdf p.81"
  },
  {
    "id": 118,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "血液凝固のプロセスの最後で、網目状に固まって血栓を完成させる物質はどれか？",
    "options": [
      "血小板",
      "フィブリン",
      "アルブミン",
      "ヘモグロビン"
    ],
    "answer": 1,
    "explanation": "血液が固まる際、最終的に「フィブリン（線維素）」の網が赤血球や血小板を絡め取って、しっかりとした血栓を作ります。（Kaibou.pdf p.149）",
    "reference": "Kaibou.pdf p.149"
  },
  {
    "id": 119,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "「呼吸困難」の際、首の筋肉（胸鎖乳突筋など）を使って一生懸命息をすることを何というか？",
    "options": [
      "外呼吸",
      "腹式呼吸",
      "努力呼吸（補助筋による呼吸）",
      "死腔換気"
    ],
    "answer": 2,
    "explanation": "通常の横隔膜だけでは足りず、首や肩の筋肉を総動員している状態です。重症な呼吸不全のサインです。（Kaibou.pdf p.103）",
    "reference": "Kaibou.pdf p.103"
  },
  {
    "id": 120,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "成人の1日の正常な尿量として、最も適切な範囲はどれか？",
    "options": [
      "約100〜200mL",
      "約500〜2,000mL（平均1.5L）",
      "約5,000〜10,000mL",
      "一定ではない"
    ],
    "answer": 1,
    "explanation": "健康な成人の1日の尿量は約1.5L程度です。400mL以下になると「少尿」と呼ばれ、腎機能障害や脱水が疑われます。（Kaibou.pdf p.140）",
    "reference": "Kaibou.pdf p.140"
  },
  {
    "id": 121,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "骨格筋が神経から収縮の命令を受け取る際、神経の末端から放出される神経伝達物質はどれか？",
    "options": [
      "アドレナリン",
      "アセチルコリン",
      "ノルアドレナリン",
      "ドパミン"
    ],
    "answer": 1,
    "explanation": "運動神経の末端（神経筋接合部）では「アセチルコリン」が放出され、これが筋肉の受容体に結合することで収縮が始まります。（Kaibou.pdf p.88 参照）",
    "reference": "Kaibou.pdf p.88"
  },
  {
    "id": 122,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳の血管系において、左右の内頸動脈と椎骨動脈系を結び、バイパスを形成している輪状の構造を何というか？",
    "options": [
      "大脳鎌",
      "ウィリス動脈輪",
      "静脈洞",
      "中脳水道"
    ],
    "answer": 1,
    "explanation": "脳の底にあるウィリス動脈輪のおかげで、一部の血管が詰まっても他から血液を回すことができるようになっています。（Kaibou.pdf p.89）",
    "reference": "Kaibou.pdf p.89"
  },
  {
    "id": 123,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心拍出量を決める「スターリングの法則」の説明として正しいものはどれか？",
    "options": [
      "心拍数が上がると血圧が下がる",
      "心筋が引き伸ばされる（前負荷が増える）ほど、収縮力が強くなる",
      "血管が細くなると血流が増える",
      "血液が濃くなると心臓は止まる"
    ],
    "answer": 1,
    "explanation": "心臓に血液がたくさん戻ってきて（前負荷）、心筋が適度にストレッチされると、ゴムパチンのように強く収縮して送り出すという法則です。（Kaibou.pdf p.115）",
    "reference": "Kaibou.pdf p.115"
  },
  {
    "id": 124,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "肺胞でのガス交換は、酸素や二酸化炭素の濃度の高い方から低い方へ移動する。この物理現象を何というか？",
    "options": [
      "浸透",
      "拡散",
      "能動輸送",
      "濾過"
    ],
    "answer": 1,
    "explanation": "エネルギーを使わずに、分圧（濃度）の差だけでガスが移動する現象を拡散と呼びます。（Kaibou.pdf p.105）",
    "reference": "Kaibou.pdf p.105"
  },
  {
    "id": 125,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "膀胱に溜まった尿を出す際に、自分の意志で緩めることができる「随意筋」の蛇口はどれか？",
    "options": [
      "内尿道括約筋",
      "外尿道括約筋",
      "排尿筋",
      "輸尿管"
    ],
    "answer": 1,
    "explanation": "内尿道括約筋は自律神経が勝手に緩めますが、外尿道括約筋は骨格筋であり、私たちは意識して締める（我慢する）ことができます。（Kaibou.pdf p.140）",
    "reference": "Kaibou.pdf p.140"
  },
  {
    "id": 126,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "寒冷刺激を受けた際に筋肉を震わせて熱を作る「シバリング」は、熱産生の何％程度を担うか？",
    "options": [
      "ほとんど関係ない",
      "約10％",
      "約85％",
      "100％"
    ],
    "answer": 2,
    "explanation": "全身の体熱の約85％は筋肉で産生されています。シバリングはこれを強制的に行う生体防御反応です。（Kaibou.pdf p.151）",
    "reference": "Kaibou.pdf p.151"
  },
  {
    "id": 127,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "髄膜の3層構造のうち、脳脊髄液が流れている「くも膜下腔」はどことどこの間か？",
    "options": [
      "頭蓋骨と硬膜",
      "硬膜とくも膜",
      "くも膜と軟膜",
      "軟膜と脳の表面"
    ],
    "answer": 2,
    "explanation": "髄膜は外から硬膜・くも膜・軟膜です。くも膜と軟膜の間が「くも膜下腔」で、ここでの出血がくも膜下出血です。（Kaibou.pdf p.83）",
    "reference": "Kaibou.pdf p.83"
  },
  {
    "id": 128,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "心臓の壁を構成する3層のうち、最も厚く、収縮を担っている層はどれか？",
    "options": [
      "心内膜",
      "心筋層",
      "心外膜（漿膜性心膜）",
      "線維性心膜"
    ],
    "answer": 1,
    "explanation": "心臓の本体は心筋層であり、左心室はこの層が特に分厚くなっています。（Kaibou.pdf p.110-111）",
    "reference": "Kaibou.pdf p.110-111"
  },
  {
    "id": 129,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "血液中で酸素を運ぶ主役である「ヘモグロビン」1gは、最大で何mLの酸素を運べるか？",
    "options": [
      "0.5 mL",
      "1.34 mL",
      "5.0 mL",
      "10.0 mL"
    ],
    "answer": 1,
    "explanation": "Hb 1gは1.34mLの酸素と結びつきます。貧血でHbが減ると、どんなに酸素を吸っても運搬能力が落ちるため苦しくなります。（Kaibou.pdf p.145）",
    "reference": "Kaibou.pdf p.145"
  },
  {
    "id": 130,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓の上にちょこんと乗っている、副腎から分泌される「アルドステロン」の働きはどれか？",
    "options": [
      "塩分（ナトリウム）を尿に出す",
      "塩分と水を再吸収して血圧を上げる",
      "赤血球を作る",
      "尿を透明にする"
    ],
    "answer": 1,
    "explanation": "アルドステロンは腎臓に命令して、塩分と水を捨てさせず体に回収させ、血圧を維持しようとします。（Kaibou.pdf p.118, 141）",
    "reference": "Kaibou.pdf p.118, 141"
  },
  {
    "id": 131,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "骨の表面にある、血管が入り込んで栄養を供給するための小さな穴を何というか？",
    "options": [
      "椎間孔",
      "大後頭孔",
      "栄養孔",
      "卵円孔"
    ],
    "answer": 2,
    "explanation": "骨は生きた組織であり、栄養孔から血液をもらって絶えず作り替え（リモデリング）を行っています。（Kaibou.pdf p.152）",
    "reference": "Kaibou.pdf p.152"
  },
  {
    "id": 132,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "対光反射（瞳に光を入れると縮む）において、命令を筋肉に届ける「出口（遠心路）」の神経はどれか？",
    "options": [
      "視神経",
      "三叉神経",
      "動眼神経",
      "顔面神経"
    ],
    "answer": 2,
    "explanation": "光を感じる入り口は視神経、筋肉を動かして瞳を絞る出口は動眼神経です。救急現場で脳幹の生死を確認する重要なテストです。（Kaibou.pdf p.91）",
    "reference": "Kaibou.pdf p.91"
  },
  {
    "id": 133,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "成人の心拍出量は、安静時でおよそ毎分何リットルか？",
    "options": [
      "約1L",
      "約5L",
      "約10L",
      "約20L"
    ],
    "answer": 1,
    "explanation": "1回拍出量(約70mL) × 心拍数(約70回) ＝ 約5,000mL(5L) となります。全血液量が約1分で体を一周する計算です。（Kaibou.pdf p.108）",
    "reference": "Kaibou.pdf p.108"
  },
  {
    "id": 134,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "子供の気道が大人に比べて詰まりやすい理由として、誤っているものはどれか？",
    "options": [
      "舌が相対的に大きく、喉に落ち込みやすいから",
      "気道が大人より細いから",
      "喉頭の位置が大人より高い（C3-4）から",
      "肺の数が大人より少ないから"
    ],
    "answer": 3,
    "explanation": "肺の数は大人も子供も同じです。子供は解剖学的に気道が狭く、少しの腫れでも完全に塞がってしまうため注意が必要です。（Kaibou.pdf p.101）",
    "reference": "Kaibou.pdf p.101"
  },
  {
    "id": 135,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓の構造で、各ネフロンで作られた尿が最後に集まって尿管へ流れ出す「漏斗」のような部分はどこか？",
    "options": [
      "腎皮質",
      "腎髄質",
      "腎盂（じんう）",
      "腎小体"
    ],
    "answer": 2,
    "explanation": "腎盂に尿が集まり、そこから尿管を通って膀胱へ向かいます。ここに石ができると腎盂結石と呼ばれます。（Kaibou.pdf p.138）",
    "reference": "Kaibou.pdf p.138"
  },
  {
    "id": 136,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "膝関節の安定性を保つ十字靱帯のうち、脛骨が前方にズレるのを防いでいるのはどれか？",
    "options": [
      "前十字靱帯",
      "後十字靱帯",
      "内側側副靱帯",
      "外側側副靱帯"
    ],
    "answer": 0,
    "explanation": "前十字靱帯(ACL)は、大腿骨に対して脛骨が前に飛び出さないように止めている強力なゴムのような役割です。（Kaibou.pdf p.152）",
    "reference": "Kaibou.pdf p.152"
  },
  {
    "id": 137,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "「闘争か逃走か」といわれる緊張時に活発になり、末梢血管を縮め、心拍を上げる神経はどれか？",
    "options": [
      "感覚神経",
      "運動神経",
      "交感神経",
      "副交感神経"
    ],
    "answer": 2,
    "explanation": "交感神経は身体を戦闘態勢にします。ショック時の冷汗・蒼白も、交感神経が血管をギューッと締めた結果です。（Kaibou.pdf p.58, 88）",
    "reference": "Kaibou.pdf p.58, 88"
  },
  {
    "id": 138,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "下肢の筋肉を動かすことで、静脈の血液を心臓へ押し上げるポンプ機能を何というか？",
    "options": [
      "心臓ポンプ",
      "筋ポンプ",
      "呼吸ポンプ",
      "重力ポンプ"
    ],
    "answer": 1,
    "explanation": "ふくらはぎの筋肉が血管を押し潰すことで、弁の助けを借りて血液を上へ運びます。「第二の心臓」と言われる所以です。（Kaibou.pdf p.116）",
    "reference": "Kaibou.pdf p.116"
  },
  {
    "id": 139,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "気管や喉の軟骨のうち、完全に「輪（リング）」の形をしていて、気道のつぶれを防いでいるのはどれか？",
    "options": [
      "甲状軟骨",
      "輪状軟骨",
      "喉頭蓋軟骨",
      "気管軟骨"
    ],
    "answer": 1,
    "explanation": "輪状軟骨は唯一、完全な円環構造をしています（気管軟骨はU字型）。輪状甲状間膜穿刺の目印としても重要です。（Kaibou.pdf p.100）",
    "reference": "Kaibou.pdf p.100"
  },
  {
    "id": 140,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "脱水時、脳の下垂体後葉から分泌されて「尿を濃くし、水を体に残せ」と腎臓に命じるホルモンはどれか？",
    "options": [
      "インスリン",
      "バソプレシン（抗利尿ホルモン）",
      "アドレナリン",
      "オキシトシン"
    ],
    "answer": 1,
    "explanation": "バソプレシン(ADH)は、腎臓の集合管で水の再吸収を促し、おしっこの量を減らして水分を節約します。（Kaibou.pdf p.140, 158）",
    "reference": "Kaibou.pdf p.140, 158"
  },
  {
    "id": 141,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "筋肉と骨をつなぐ「腱」が摩擦から守られるために包まれている「鞘」のような構造を何というか？",
    "options": [
      "骨膜",
      "腱鞘（けんしょう）",
      "筋膜",
      "関節包"
    ],
    "answer": 1,
    "explanation": "腱鞘は内部に滑液を含み、腱が骨と擦れて傷まないように守っています。ここが炎症を起こすのが腱鞘炎です。（Kaibou.pdf p.153）",
    "reference": "Kaibou.pdf p.153"
  },
  {
    "id": 142,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "脳の覚醒レベル（意識のハッキリ度合い）を維持している「上行性網様体賦活系」は脳のどのエリアにあるか？",
    "options": [
      "大脳皮質",
      "小脳",
      "脳幹（中脳・橋・延髄）",
      "脊髄"
    ],
    "answer": 2,
    "explanation": "意識のスイッチは脳の深いところ（脳幹）にあります。ここがやられると、どんなに大脳が元気でも意識は戻りません。（Kaibou.pdf p.81, 90）",
    "reference": "Kaibou.pdf p.81, 90"
  },
  {
    "id": 143,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "「第一心音（I音）」はどのタイミングで発生するか？",
    "options": [
      "大動脈弁が閉まるとき",
      "房室弁（僧帽弁・三尖弁）が閉まるとき",
      "心房が縮むとき",
      "肺動脈弁が開くとき"
    ],
    "answer": 1,
    "explanation": "「ドクン」の「ド」は房室弁が閉まる音です。これで収縮期が始まります。（Kaibou.pdf p.113）",
    "reference": "Kaibou.pdf p.113"
  },
  {
    "id": 144,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "私たちが意識して「息を止めよう」と思えるのは、呼吸のコントロールがどこで行われているからか？",
    "options": [
      "延髄",
      "橋",
      "大脳皮質",
      "脊髄"
    ],
    "answer": 2,
    "explanation": "自動的な呼吸は延髄が行いますが、自分の意志で止めるなどの調節は大脳皮質が行っています。（Kaibou.pdf p.107）",
    "reference": "Kaibou.pdf p.107"
  },
  {
    "id": 145,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "健康な大人の「膀胱」が満タンになった時の容量はおよそどのくらいか？",
    "options": [
      "約100 mL",
      "約500 mL",
      "約2,000 mL",
      "約5,000 mL"
    ],
    "answer": 1,
    "explanation": "膀胱は約500mLほど溜められますが、200〜300mLほど溜まると「トイレに行きたい」という尿意を感じ始めます。（Kaibou.pdf p.140 参照）",
    "reference": "Kaibou.pdf p.140"
  },
  {
    "id": 146,
    "level": 3,
    "category": "anatomy",
    "subCategory": "musculoskeletal",
    "text": "脊髄損傷のレベルを判定する「デルマトーム」において、おへその高さ（臍）は何番目の脊髄神経の支配か？",
    "options": [
      "Th4 (T4)",
      "Th10 (T10)",
      "L1",
      "S1"
    ],
    "answer": 1,
    "explanation": "おへそはTh10です。乳首はTh4、足の付け根はL1となります。麻痺の範囲を調べる重要な指標です。（Kaibou.pdf p.86）",
    "reference": "Kaibou.pdf p.86"
  },
  {
    "id": 147,
    "level": 3,
    "category": "anatomy",
    "subCategory": "nervous",
    "text": "神経細胞（ニューロン）の中で、他の細胞からの信号を「受け取る」ためのアンテナのような突起はどれか？",
    "options": [
      "軸索",
      "樹状突起",
      "髄鞘",
      "シナプス小胞"
    ],
    "answer": 1,
    "explanation": "樹状突起が信号を受け取り、軸索がその信号を次の細胞へ送り出します。（Kaibou.pdf p.79）",
    "reference": "Kaibou.pdf p.79"
  },
  {
    "id": 148,
    "level": 3,
    "category": "anatomy",
    "subCategory": "circulatory",
    "text": "成人の心臓で、全身へ血液を送り出すため最も筋肉が分厚く発達している部屋はどこか？",
    "options": [
      "右心房",
      "右心室",
      "左心房",
      "左心室"
    ],
    "answer": 3,
    "explanation": "左心室は高い圧力に抗して全身に送る必要があるため、右心室の約3倍の厚さがあります。（Kaibou.pdf p.111）",
    "reference": "Kaibou.pdf p.111"
  },
  {
    "id": 149,
    "level": 3,
    "category": "anatomy",
    "subCategory": "respiratory",
    "text": "喉の奥で、鼻と口からの通り道が合流し、さらに空気（気管）と食べ物（食道）の道に分かれる前の共有部分を何というか？",
    "options": [
      "咽頭（いんとう）",
      "喉頭（こうとう）",
      "喉頭蓋",
      "声門"
    ],
    "answer": 0,
    "explanation": "咽頭は共通の通り道です。その下の「喉頭」が空気の入り口であり、ここを喉頭蓋がパタンと閉じて誤嚥を防ぎます。（Kaibou.pdf p.99-100）",
    "reference": "Kaibou.pdf p.99-100"
  },
  {
    "id": 150,
    "level": 3,
    "category": "anatomy",
    "subCategory": "urinary",
    "text": "腎臓が血液をろ過して最初に作る「原尿」から、必要な成分の約80％以上が再吸収される最初の尿細管はどれか？",
    "options": [
      "近位尿細管",
      "ヘンレループ",
      "遠位尿細管",
      "集合管"
    ],
    "answer": 0,
    "explanation": "濾過された直後の「近位尿細管」で、水や栄養分、電解質の大部分が回収されます。（Kaibou.pdf p.131）",
    "reference": "Kaibou.pdf p.131"
  },
  {
    "id": 1,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "意識がない人を見つけた時、最初に確認するべきことは？",
    "options": ["周囲が安全かどうか", "財布を持っているか", "靴を履いているか", "何歳くらいか"],
    "answer": 0,
    "explanation": "二次災害を防ぐため、助ける人自身の安全をまず確認することが最も大切です。[1]",
    "reference": "Syochi.pdf p.225"
  },
  {
    "id": 2,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "倒れている人の反応を確かめるには、体のどこを叩くのがいい？",
    "options": ["足の裏", "お腹", "両方の肩", "頭"],
    "answer": 2,
    "explanation": "耳元で声をかけながら、両肩を優しく叩いて反応があるかを確認します。[2]",
    "reference": "Kansatsu.pdf p.310"
  },
  {
    "id": 3,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "119番に通報した時に呼ぶのは？",
    "options": ["タクシー", "救急車", "パトカー", "郵便車"],
    "answer": 1,
    "explanation": "急病や大きな怪我のときは119番で救急車を呼びます。[1]",
    "reference": "Syochi.pdf p.225"
  },
  {
    "id": 4,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心臓が止まっている人に行う、胸の真ん中を強く押す動作は？",
    "options": ["深呼吸", "背中叩き", "胸骨圧迫", "肩もみ"],
    "answer": 2,
    "explanation": "心臓の代わりに血液を送り出すために行うのが胸骨圧迫です。[3]",
    "reference": "Byouri.pdf p.477"
  },
  {
    "id": 5,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "大人の胸骨圧迫で、胸を沈ませる深さの目安は？",
    "options": ["約1cm", "約5cm", "約10cm", "約20cm"],
    "answer": 1,
    "explanation": "大人の場合は約5cm沈むように強く押すことが効果的です。[4]",
    "reference": "Syochi.pdf p.32"
  },
  {
    "id": 6,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "胸骨圧迫を行う速さは、1分間にどれくらい？",
    "options": ["30回くらい", "60回くらい", "100〜120回", "200回以上"],
    "answer": 2,
    "explanation": "1分間に100回から120回という、少し速いテンポで押し続ける必要があります。[4]",
    "reference": "Syochi.pdf p.32"
  },
  {
    "id": 7,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心臓に電気ショックを与えるための機械の名前は？",
    "options": ["GPS", "AED", "USB", "DVD"],
    "answer": 1,
    "explanation": "AEDは心臓の震えを電気ショックで取り除くための自動機械です。[5]",
    "reference": "Syochi.pdf p.11"
  },
  {
    "id": 8,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "AEDが「体に触れないでください」と言ったらどうする？",
    "options": ["もっと強く押す", "手を離して離れる", "人工呼吸をする", "体を揺らす"],
    "answer": 1,
    "explanation": "機械が心電図を調べているときに触れると、正確な判断ができません。[4]",
    "reference": "Syochi.pdf p.32"
  },
  {
    "id": 9,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "息をしているか確認する時間は、何秒以内にするべき？",
    "options": ["1秒", "10秒", "30秒", "1分"],
    "answer": 1,
    "explanation": "判断を迷うと時間がかかるため、10秒以内に呼吸を確認します。[5]",
    "reference": "Syochi.pdf p.11"
  },
  {
    "id": 10,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "胸骨圧迫と人工呼吸を組み合わせる時の回数の割合は？",
    "options": ["10対1", "20対2", "30対2", "50対5"],
    "answer": 2,
    "explanation": "胸骨圧迫を30回行い、その後に2回の人工呼吸を行うサイクルを繰り返します。[6]",
    "reference": "Syochi.pdf p.15"
  },
  {
    "id": 11,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "AEDのパッドはどこに貼る？",
    "options": ["服の上から", "肌に直接", "靴下の上から", "帽子の上から"],
    "answer": 1,
    "explanation": "電気を効率よく流すため、必ず衣服を取り除いて肌に直接貼ります。[5]",
    "reference": "Syochi.pdf p.11"
  },
  {
    "id": 12,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "胸骨圧迫をする時、肘はどうする？",
    "options": ["曲げる", "真っ直ぐ伸ばす", "交互に動かす", "脇を締める"],
    "answer": 1,
    "explanation": "肘を伸ばして体重をかけることで、効率よく強く押すことができます。[4]",
    "reference": "Syochi.pdf p.32"
  },
  {
    "id": 13,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "人工呼吸を1回行うのにかける時間は？",
    "options": ["0.1秒", "1秒", "5秒", "10秒"],
    "answer": 1,
    "explanation": "約1秒かけて胸が軽く上がる程度の空気を吹き込みます。[4]",
    "reference": "Syochi.pdf p.32"
  },
  {
    "id": 14,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "救急隊が来るまで、胸骨圧迫はどうする？",
    "options": ["疲れたらやめる", "できるだけ続ける", "1回やれば十分", "AEDを待つ間は休む"],
    "answer": 1,
    "explanation": "脳に血液を送り続けるため、救急隊と交代するまで続けます。[4]",
    "reference": "Syochi.pdf p.32"
  },
  {
    "id": 15,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "AEDのメッセージに従ってボタンを押す前、何を確認する？",
    "options": ["周りに人がいないか", "天気はどうか", "自分の服の汚れ", "相手の靴のサイズ"],
    "answer": 0,
    "explanation": "感電を防ぐため、ボタンを押す前に誰も本人に触れていないか確認します。[4]",
    "reference": "Syochi.pdf p.32"
  },
  {
    "id": 16,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "意識はないが、普段通りに息をしている場合はどうする？",
    "options": ["胸骨圧迫をする", "体を横向きに寝かせる", "放っておく", "水を飲ませる"],
    "answer": 1,
    "explanation": "嘔吐物で喉が詰まらないよう、回復体位（横向き）にして様子を見ます。[7]",
    "reference": "Byouri.pdf p.465"
  },
  {
    "id": 17,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "誰かが目の前で倒れたら、まず誰を呼ぶべき？",
    "options": ["警察官", "周囲の人に助けを求める", "テレビ局", "学校の先生"],
    "answer": 1,
    "explanation": "1人では大変なので、まず大きな声を出して周囲の助けを呼びます。[1]",
    "reference": "Syochi.pdf p.225"
  },
  {
    "id": 18,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "胸骨圧迫をする位置はどこ？",
    "options": ["胸の左側", "胸の右側", "胸の真ん中（半分から下）", "おへその下"],
    "answer": 2,
    "explanation": "胸の真ん中の骨の、半分より下側あたりを手のひらの付け根で押します。[4]",
    "reference": "Syochi.pdf p.32"
  },
  {
    "id": 19,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "「死戦期呼吸」という途切れ途切れの呼吸は、どう扱う？",
    "options": ["安心する", "心臓が止まったとみなす", "しばらく様子を見る", "深呼吸を促す"],
    "answer": 1,
    "explanation": "これは普通の呼吸ではないため、心停止としてすぐに胸骨圧迫を始めます。[3]",
    "reference": "Byouri.pdf p.477"
  },
  {
    "id": 20,
    "level": "1",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "AEDが「電気ショックは不要です」と言ったらどうする？",
    "options": ["片付けをはじめる", "すぐに胸骨圧迫を再開する", "立ち去る", "深呼吸をさせる"],
    "answer": 1,
    "explanation": "ショックが不要でも心臓が止まっている可能性があるので、圧迫を続けます。[4]",
    "reference": "Syochi.pdf p.32"
  },
  {
    "id": 21,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "健康な大人の体温はだいたい何度くらい？",
    "options": ["30度", "36〜37度", "38〜39度", "40度以上"],
    "answer": 1,
    "explanation": "平熱は人によって違いますが、通常は36度から37度程度です。[8]",
    "reference": "Kaibou.pdf p.540"
  },
  {
    "id": 22,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "手首で測ることができる、心臓のリズムは？",
    "options": ["脈拍", "血圧", "体温", "視力"],
    "answer": 0,
    "explanation": "手首の動脈を触ることで、心臓の鼓動である脈拍を測れます。[9]",
    "reference": "Kaibou.pdf p.110"
  },
  {
    "id": 23,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "健康な大人が安静にしている時の1分間の脈拍数は？",
    "options": ["20回くらい", "60〜80回", "150回以上", "200回以上"],
    "answer": 1,
    "explanation": "安静時は1分間にだいたい60回から80回程度が標準です。[10]",
    "reference": "Byouri.pdf p.573"
  },
  {
    "id": 24,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "皮膚が青白くて冷たい時、何が起きている可能性がある？",
    "options": ["ショック状態", "日焼け", "興奮している", "ただの風邪"],
    "answer": 0,
    "explanation": "血の巡りが悪くなると皮膚が青白く、冷たくなります。これはショックのサインです。[11]",
    "reference": "Byouri.pdf p.463"
  },
  {
    "id": 25,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "呼吸が苦しくて横になれない時、どんな姿勢にすると楽になる？",
    "options": ["逆立ち", "うつ伏せ", "座った姿勢（起坐位）", "丸くなる"],
    "answer": 2,
    "explanation": "座る姿勢（起坐呼吸）は、横になるより心臓や肺の負担を軽くすることがあります。[12]",
    "reference": "Kansatsu.pdf p.529"
  },
  {
    "id": 26,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "意識があるか確認する時、名前や今いる場所がわかることを何という？",
    "options": ["記憶力", "見当識", "反射", "直感"],
    "answer": 1,
    "explanation": "「自分は誰か、ここはどこか」を正しく認識できているかを確認することを言います。[13]",
    "reference": "Kansatsu.pdf p.310"
  },
  {
    "id": 27,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "指の爪を3秒押して離した後、赤みがすぐ戻らないのは何のサイン？",
    "options": ["疲れ", "血の巡りが悪い", "乾燥肌", "空腹"],
    "answer": 1,
    "explanation": "爪の色が戻るのに2秒以上かかる場合は、血液循環が悪い可能性があります。[14]",
    "reference": "Kansatsu.pdf p.321"
  },
  {
    "id": 28,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "健康な大人の1分間の呼吸数はだいたいどれくらい？",
    "options": ["5回", "15〜20回", "50回", "100回"],
    "answer": 1,
    "explanation": "健康な大人は1分間に15回から20回程度の呼吸をしています。[15]",
    "reference": "Byouri.pdf p.454"
  },
  {
    "id": 29,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "「チアノーゼ」とは、唇などが何色になること？",
    "options": ["真っ赤", "黄色", "青紫色", "真っ白"],
    "answer": 2,
    "explanation": "体の中の酸素が足りなくなると、唇や指先が青紫色になることがあります。[16]",
    "reference": "Byouri.pdf p.454"
  },
  {
    "id": 30,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "瞳（ひとみ）に光を当てた時、普通はどうなる？",
    "options": ["大きくなる", "小さくなる", "変わらない", "閉じる"],
    "answer": 1,
    "explanation": "正常な脳の反応として、強い光を受けると瞳は小さく縮みます（対光反射）。[17]",
    "reference": "Kansatsu.pdf p.314"
  },
  {
    "id": 31,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "手首の脈が触れないが、首の脈が触れる時の血圧の状態は？",
    "options": ["かなり低い", "かなり高い", "正常", "わからない"],
    "answer": 0,
    "explanation": "首の脈（頸動脈）しか分からないときは、命に関わるほど血圧が下がっているサインです。[18]",
    "reference": "Syochi.pdf p.46"
  },
  {
    "id": 32,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "赤ちゃんや子供の脈拍は、大人と比べてどう？",
    "options": ["遅い", "速い", "同じ", "止まっている"],
    "answer": 1,
    "explanation": "体は小さいですが、赤ちゃんは大人よりも脈拍や呼吸がとても速いです。[19]",
    "reference": "Kaibou.pdf p.647"
  },
  {
    "id": 33,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "血圧を測る時、腕に巻く布の部分の名前は？",
    "options": ["ベルト", "カフ（マンシェット）", "バンダナ", "包帯"],
    "answer": 1,
    "explanation": "腕を圧迫して血圧を測るための専用の帯をカフと言います。[20]",
    "reference": "Kansatsu.pdf p.336"
  },
  {
    "id": 34,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "意識レベルを測る「JCS」で、一番重い状態はどれ？",
    "options": ["0", "1", "10", "300"],
    "answer": 3,
    "explanation": "JCS300は、痛み刺激に対しても全く反応がない最も深い昏睡状態です。[2]",
    "reference": "Kansatsu.pdf p.310"
  },
  {
    "id": 35,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "呼吸が非常に速く、手足が痺れることもある状態は？",
    "options": ["過換気（かかんき）", "冬眠", "鼻詰まり", "あくび"],
    "answer": 0,
    "explanation": "不安などで呼吸をしすぎると、血液のバランスが崩れて手足が痺れることがあります。[21]",
    "reference": "Kaibou.pdf p.613"
  },
  {
    "id": 36,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "お年寄りの体温は、若い人と比べてどうなりやすい？",
    "options": ["上がりやすい", "変化しにくい", "下がりやすい", "常に40度ある"],
    "answer": 2,
    "explanation": "高齢の方は体温を保つ力が弱くなりやすく、低体温になりやすい傾向があります。[22]",
    "reference": "Kaibou.pdf p.658"
  },
  {
    "id": 37,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "体の中で、酸素を全身に運ぶ役割をしているのは？",
    "options": ["胃液", "血液", "リンパ液", "涙"],
    "answer": 1,
    "explanation": "血液の中の赤血球（ヘモグロビン）が酸素を運ぶトラックの役割をします。[23]",
    "reference": "Kaibou.pdf p.143"
  },
  {
    "id": 38,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "おしっこの量が極端に減るのは、何のサイン？",
    "options": ["元気な証拠", "脱水や腎臓のピンチ", "食べ過ぎ", "眠気"],
    "answer": 1,
    "explanation": "ショックや脱水になると、体内の水分を逃さないために尿量が激減します。[24]",
    "reference": "Byouri.pdf p.463"
  },
  {
    "id": 39,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "脈が「バラバラに乱れている」状態を何という？",
    "options": ["正常", "不整脈", "筋肉痛", "立ちくらみ"],
    "answer": 1,
    "explanation": "一定のリズムではなく、飛んだり乱れたりする心拍の状態を言います。[10]",
    "reference": "Byouri.pdf p.573"
  },
  {
    "id": 40,
    "level": "1",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "意識がない人の喉に舌が落ち込むことを何という？",
    "options": ["舌打ち", "舌根沈下", "早口言葉", "飲み込み"],
    "answer": 1,
    "explanation": "意識がないと舌の筋肉が緩んで喉を塞いでしまうため、気道確保が必要です。[25]",
    "reference": "Syochi.pdf p.48"
  },
  {
    "id": 41,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳の血管が詰まったり破れたりする病気をまとめて何という？",
    "options": ["心臓病", "脳卒中", "胃炎", "筋肉痛"],
    "answer": 1,
    "explanation": "脳梗塞や脳出血など、脳の血管のトラブルをまとめて脳卒中と呼びます。[26]",
    "reference": "Byouri.pdf p.547"
  },
  {
    "id": 42,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "顔の半分が動かない、笑うとゆがむのは何のサイン？",
    "options": ["疲れ", "脳の病気", "虫歯", "眠気"],
    "answer": 1,
    "explanation": "脳の神経がダメージを受けると、顔の表情が左右非対称になることがあります。[27]",
    "reference": "Syochi.pdf p.52"
  },
  {
    "id": 43,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "片方の腕だけに急に力が入らなくなったら、何を疑う？",
    "options": ["脳卒中", "使いすぎ", "肩こり", "寝不足"],
    "answer": 0,
    "explanation": "体の片側だけ麻痺が出るのは、脳卒中の非常に典型的な症状です。[26]",
    "reference": "Byouri.pdf p.547"
  },
  {
    "id": 44,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "言葉がうまく話せない、ろれつが回らないのは何のサイン？",
    "options": ["お腹が空いた", "脳の病気", "喉が痛い", "緊張"],
    "answer": 1,
    "explanation": "脳の言葉を司る場所や筋肉のコントロールが悪くなると発生します。[27]",
    "reference": "Syochi.pdf p.52"
  },
  {
    "id": 45,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "心臓の周りの血管が詰まって、胸が激しく痛む病気は？",
    "options": ["心筋梗塞", "胃潰瘍", "肺炎", "骨折"],
    "answer": 0,
    "explanation": "心臓自体に栄養を送る血管が詰まり、心筋が死んでしまう危険な病気です。[28]",
    "reference": "Byouri.pdf p.466"
  },
  {
    "id": 46,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳卒中を疑うサイン「FAST」の「F」は何の略？",
    "options": ["Food（食べ物）", "Face（顔）", "Foot（足）", "Fast（速い）"],
    "answer": 1,
    "explanation": "Face(顔のゆがみ)の確認が大切という意味が込められています。[27]",
    "reference": "Syochi.pdf p.52"
  },
  {
    "id": 47,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "「今まで経験したことがないほど激しい頭痛」で疑うのは？",
    "options": ["くも膜下出血", "鼻炎", "虫歯", "寝違え"],
    "answer": 0,
    "explanation": "脳の表面の血管が破れて起こる「くも膜下出血」のサインである事が多いです。[18]",
    "reference": "Syochi.pdf p.51"
  },
  {
    "id": 48,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "心臓がポンプとして動かなくなる、とても危ない状態は？",
    "options": ["心不全", "筋肉痛", "しゃっくり", "深呼吸"],
    "answer": 0,
    "explanation": "心臓の機能が低下し、全身に必要な血液が送れなくなった状態です。[29]",
    "reference": "Byouri.pdf p.458"
  },
  {
    "id": 49,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳にダメージが起きると、体の動きはどうなる？",
    "options": ["速くなる", "麻痺して動かなくなる", "柔らかくなる", "変わらない"],
    "answer": 1,
    "explanation": "脳は筋肉へ「動け」という指令を出すため、脳が傷つくとその先の筋肉が動きません。[30]",
    "reference": "Byouri.pdf p.473"
  },
  {
    "id": 50,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "心筋梗塞で胸が痛む時、他に痛みを感じやすい場所は？",
    "options": ["足の指", "左の肩や腕", "頭のてっぺん", "膝"],
    "answer": 1,
    "explanation": "左肩や顎などに痛みが出ることもあります（関連痛といいます）。[31]",
    "reference": "Kansatsu.pdf p.537"
  },
  {
    "id": 51,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳の血管が詰まる病気を何という？",
    "options": ["脳梗塞", "脳出血", "胃炎", "貧血"],
    "answer": 0,
    "explanation": "脳の血管に血栓などが詰まり、脳細胞が死んでしまう状態を脳梗塞と言います。[26]",
    "reference": "Byouri.pdf p.547"
  },
  {
    "id": 52,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "心臓を動かしている筋肉の名前は？",
    "options": ["腹筋", "心筋", "背筋", "力こぶ"],
    "answer": 1,
    "explanation": "心臓は「心筋」という特別な筋肉の塊でできています。[32]",
    "reference": "Kaibou.pdf p.111"
  },
  {
    "id": 53,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳卒中を疑ったら、すぐに何をするべき？",
    "options": ["寝かせて様子を見る", "119番通報する", "水を飲ませる", "散歩する"],
    "answer": 1,
    "explanation": "1分1秒でも早く治療を始めることが後遺症を減らす鍵です。すぐ通報しましょう。[33]",
    "reference": "Byouri.pdf p.549"
  },
  {
    "id": 54,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳の血管が破れる病気を何という？",
    "options": ["脳出血", "脳梗塞", "立ちくらみ", "頭痛"],
    "answer": 0,
    "explanation": "高血圧などが原因で、脳の中の血管が切れてしまうことを脳出血と言います。[26]",
    "reference": "Byouri.pdf p.547"
  },
  {
    "id": 55,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "心筋梗塞の予防に良い生活習慣はどれ？",
    "options": ["タバコを吸う", "塩分を控える", "運動しない", "毎日お酒をたくさん飲む"],
    "answer": 1,
    "explanation": "高血圧を防ぐために塩分を控え、規則正しい生活を送ることが予防に役立ちます。[34]",
    "reference": "Byouri.pdf p.566"
  },
  {
    "id": 56,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "物が二重に重なって見えることを何という？",
    "options": ["複視", "遠視", "近視", "乱視"],
    "answer": 0,
    "explanation": "脳の神経がうまく働かず、両目が同じ向きを向けなくなると起こります。[35]",
    "reference": "Kansatsu.pdf p.508"
  },
  {
    "id": 57,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "心臓の動きが一時的に悪くなり、胸が締め付けられるのは？",
    "options": ["狭心症", "胃もたれ", "咳", "腹痛"],
    "answer": 0,
    "explanation": "血管が完全に詰まってはいないが、一時的に酸素不足で苦しくなる状態です。[36]",
    "reference": "Byouri.pdf p.568"
  },
  {
    "id": 58,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳の右側がダメージを受けると、体のどちら側が動きにくくなる？",
    "options": ["右側", "左側", "両方", "どこも変わらない"],
    "answer": 1,
    "explanation": "脳からの神経は延髄で左右が入れ替わるため、反対側に麻痺が出ます。[37]",
    "reference": "Byouri.pdf p.473"
  },
  {
    "id": 59,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "急な意識障害で倒れた人が吐きそうな時、どうする？",
    "options": ["仰向けにする", "顔を横に向ける", "立たせる", "背中をさする"],
    "answer": 1,
    "explanation": "吐いたものが喉に詰まらないよう、顔を横向きにします。[33]",
    "reference": "Byouri.pdf p.549"
  },
  {
    "id": 60,
    "level": "1",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳卒中の治療は、時間が早いほどどうなる？",
    "options": ["悪くなる", "助かる可能性が高まる", "関係ない", "薬がいらなくなる"],
    "answer": 1,
    "explanation": "「タイム・イズ・ブレイン（時間は脳）」と言われ、早急な治療が救命率を上げます。[33]",
    "reference": "Byouri.pdf p.549"
  },
  {
    "id": 61,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "暑い場所で、体温調節ができなくなって倒れるのは何？",
    "options": ["熱中症", "風邪", "霜焼け", "貧血"],
    "answer": 0,
    "explanation": "体に熱が溜まり、水分や塩分のバランスが崩れてしまう状態です。[38]",
    "reference": "Kaibou.pdf p.541"
  },
  {
    "id": 62,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "体の中の水分が足りなくなる状態を何という？",
    "options": ["満腹", "脱水", "肥満", "筋肉質"],
    "answer": 1,
    "explanation": "汗や嘔吐などでお水が足りなくなると、脳や腎臓に大きな負担がかかります。[39]",
    "reference": "Kaibou.pdf p.611"
  },
  {
    "id": 63,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "血液中の砂糖（ブドウ糖）が多すぎる状態が続く病気は？",
    "options": ["糖尿病", "胃炎", "低血圧", "骨粗鬆症"],
    "answer": 0,
    "explanation": "糖分（血糖）を下げるホルモンがうまく働かなくなる病気です。[40]",
    "reference": "Kaibou.pdf p.605"
  },
  {
    "id": 64,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "糖尿病の人が、急に冷や汗や震えが出て意識がぼんやりするのは？",
    "options": ["高血糖", "低血糖", "高血圧", "筋肉痛"],
    "answer": 1,
    "explanation": "血糖値が下がりすぎて脳のエネルギーが不足すると、命に関わることがあります。[41]",
    "reference": "Kaibou.pdf p.609"
  },
  {
    "id": 65,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "蜂に刺されたりして、全身に激しいアレルギーが出るのは？",
    "options": ["アナフィラキシー", "あせも", "ニキビ", "日焼け"],
    "answer": 0,
    "explanation": "短時間で呼吸が苦しくなったり血圧が下がったりする、激しいアレルギー反応です。[42]",
    "reference": "Syochi.pdf p.43"
  },
  {
    "id": 66,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "大量に出血して、命に関わるほど血圧が下がる状態は？",
    "options": ["ショック状態", "立ちくらみ", "居眠り", "のぼせ"],
    "answer": 0,
    "explanation": "全身の臓器に血液が届かなくなり、非常に危険な状態です。[43]",
    "reference": "Byouri.pdf p.463"
  },
  {
    "id": 67,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "熱中症を予防するために、水分と一緒に摂るべきなのは？",
    "options": ["コショウ", "塩分", "唐辛子", "油"],
    "answer": 1,
    "explanation": "汗で失われるのは水だけでなく塩分もなので、両方の補給が大切です。[44]",
    "reference": "Byouri.pdf p.818"
  },
  {
    "id": 68,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "血糖値を下げるために使われるホルモンの注射薬は？",
    "options": ["ビタミン剤", "インスリン", "胃薬", "目薬"],
    "answer": 1,
    "explanation": "体内で唯一、血糖値を下げることができる強力なホルモンです。[40]",
    "reference": "Kaibou.pdf p.605"
  },
  {
    "id": 69,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "意識がぼんやりしている人に、飲み物を飲ませていい？",
    "options": ["はい", "だめ（窒息の危険がある）", "少しならいい", "熱いお茶ならいい"],
    "answer": 1,
    "explanation": "うまく飲み込めずに、液体が肺に入って窒息する恐れがあります。[45]",
    "reference": "Kansatsu.pdf p.532"
  },
  {
    "id": 70,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "アレルギーの激しい症状を抑えるための、自分でも打てる注射は？",
    "options": ["エピペン", "ワクチン", "麻酔", "点滴"],
    "answer": 0,
    "explanation": "アナフィラキシーが起きた時に、太ももに押し当てて使う緊急用のお薬です。[46]",
    "reference": "Syochi.pdf p.44"
  },
  {
    "id": 71,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "寒い場所で体が震えるのは何のため？",
    "options": ["熱を作るため", "ダンスのため", "怖がっているため", "眠るため"],
    "answer": 0,
    "explanation": "筋肉を小刻みに動かすこと（シバリング）で、体温を上げようとしています。[47]",
    "reference": "Kaibou.pdf p.161"
  },
  {
    "id": 72,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "低血糖になった時、意識があれば何を摂るのが一番いい？",
    "options": ["お水", "砂糖やブドウ糖", "野菜", "お肉"],
    "answer": 1,
    "explanation": "吸収の早いブドウ糖やお砂糖を含む甘い飲み物を摂ります。[48]",
    "reference": "Kaibou.pdf p.610"
  },
  {
    "id": 73,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "重い病気で、体の中の血液が酸性に傾くことを何という？",
    "options": ["アシドーシス", "アルカローシス", "中性", "アルカリ"],
    "answer": 0,
    "explanation": "ショックなどで酸素不足が続くと、血液が酸性に傾き、細胞が壊れやすくなります。[49]",
    "reference": "Byouri.pdf p.463"
  },
  {
    "id": 74,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "腎臓がうまく働かなくなると、体に何が溜まる？",
    "options": ["ビタミン", "老廃物や毒素", "酸素", "元気"],
    "answer": 1,
    "explanation": "腎臓はおしっこを作って毒素を出すゴミ処理場の役目。止まると毒素が溜まります。[50]",
    "reference": "Kaibou.pdf p.129"
  },
  {
    "id": 75,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "糖尿病が悪化して、息から甘酸っぱい臭いがするのは？",
    "options": ["元気な証拠", "ケトアシドーシスという危険な状態", "お菓子の食べ過ぎ", "虫歯"],
    "answer": 1,
    "explanation": "糖を使えず脂肪を燃やしすぎると、酸性物質（ケトン体）が溜まってこの臭いがします。[51]",
    "reference": "Kaibou.pdf p.611"
  },
  {
    "id": 76,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "インスリンを作っている臓器はどこ？",
    "options": ["胃", "膵臓（すいぞう）", "肺", "心臓"],
    "answer": 1,
    "explanation": "胃の裏側あたりにある膵臓が、血糖値を下げるインスリンを作っています。[52]",
    "reference": "Kaibou.pdf p.127"
  },
  {
    "id": 77,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "急激なアレルギーで息苦しくなるのは、どこの浮腫（はれ）のせい？",
    "options": ["足首", "喉の奥", "耳", "手のひら"],
    "answer": 1,
    "explanation": "喉の奥の粘膜が腫れると、空気の通り道が塞がって窒息する恐れがあります。[53]",
    "reference": "Byouri.pdf p.558"
  },
  {
    "id": 78,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "脱水が進むと、おしっこの色はどうなる？",
    "options": ["透明になる", "濃い黄色になる", "白くなる", "変わらない"],
    "answer": 1,
    "explanation": "水分不足のためにおしっこが濃くなり、色が濃く変わります。[54]",
    "reference": "Kaibou.pdf p.126"
  },
  {
    "id": 79,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "体の中の砂糖の量を調整している臓器はどれ？",
    "options": ["膵臓と肝臓", "胃と腸", "肺と心臓", "目と鼻"],
    "answer": 0,
    "explanation": "ホルモンを出す膵臓と、砂糖を蓄えたり出したりする肝臓が連携しています。[40]",
    "reference": "Kaibou.pdf p.605"
  },
  {
    "id": 80,
    "level": "1",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "ショック状態で脈が速くなるのは何のため？",
    "options": ["運動するため", "少ない血液を必死に回すため", "怒っているため", "楽しいから"],
    "answer": 1,
    "explanation": "血液が足りないのを、心臓の回数を増やすことで補おうとする反応です。[24]",
    "reference": "Byouri.pdf p.463"
  },
  {
    "id": 81,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "火傷（やけど）をしたら、まず最初にするべきことは？",
    "options": ["薬を塗る", "冷やす", "包帯を巻く", "針でつつく"],
    "answer": 1,
    "explanation": "すぐに冷たい水道水などで冷やすことで、ダメージが広がるのを防ぎます。[55]",
    "reference": "Byouri.pdf p.759"
  },
  {
    "id": 82,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "鼻血が出た時、正しい姿勢はどれ？",
    "options": ["上を向く", "下を向いて小鼻をしっかり押さえる", "寝転がる", "首の後ろを叩く"],
    "answer": 1,
    "explanation": "下を向いて小鼻をしっかりつまむのが最も効果的な止血法です。[56]",
    "reference": "Byouri.pdf p.634"
  },
  {
    "id": 83,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "喉（のど）に食べ物を詰まらせた時、背中をどうする？",
    "options": ["さする", "強く何度も叩く", "くすぐる", "何もしない"],
    "answer": 1,
    "explanation": "肩甲骨の間を力強く何度も叩いて、異物を出す助けをします（背部叩打法）。[57]",
    "reference": "Byouri.pdf p.807"
  },
  {
    "id": 84,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "包丁で指を切って血が止まらない。どうすればいい？",
    "options": ["傷口を強く押さえる", "手を振る", "水に浸す", "放置する"],
    "answer": 0,
    "explanation": "清潔なガーゼなどで傷口を上から強く押さえる「直接圧迫止血」が基本です。[58]",
    "reference": "Gaisyou.pdf p.705"
  },
  {
    "id": 85,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "骨が折れているかもしれない時、一番大切なのは？",
    "options": ["真っ直ぐに直す", "動かさないように固定する", "引っ張る", "マッサージする"],
    "answer": 1,
    "explanation": "無理に動かすと、周りの筋肉や血管を傷つけるため、固定することが大切です。[59]",
    "reference": "Gaisyou.pdf p.747"
  },
  {
    "id": 86,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "目に洗剤や薬品が入ってしまった。まずどうする？",
    "options": ["目をこする", "すぐに大量の水で洗う", "目薬をさす", "目を閉じて寝る"],
    "answer": 1,
    "explanation": "15分以上、きれいな水道水でしっかりと洗い流すことが重要です。[60]",
    "reference": "Byouri.pdf p.769"
  },
  {
    "id": 87,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "犬に噛まれた。傷口はどうする？",
    "options": ["すぐに水道水でよく洗う", "そのままにする", "ラップを巻く", "消毒液に浸す"],
    "answer": 0,
    "explanation": "細菌による感染症を防ぐため、まずきれいなお水で徹底的に洗います。[61]",
    "reference": "Byouri.pdf p.781"
  },
  {
    "id": 88,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "火傷を冷やす時、水道水を使う時間はどれくらい？",
    "options": ["10秒", "10〜20分くらい", "2時間", "1日中"],
    "answer": 1,
    "explanation": "痛みが落ち着くまで、だいたい15分から20分程度冷やし続けます。[55]",
    "reference": "Byouri.pdf p.759"
  },
  {
    "id": 89,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "大きな釘が足に刺さったまま。抜いていい？",
    "options": ["すぐに抜く", "抜かずに固定して病院へ行く", "半分だけ抜く", "洗う"],
    "answer": 1,
    "explanation": "抜くと大出血が起きる恐れがあるため、そのまま動かないように固定します。[62]",
    "reference": "Gaisyou.pdf p.711"
  },
  {
    "id": 90,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "火傷でできた「水ぶくれ」。どうする？",
    "options": ["潰す", "潰さないように保護する", "皮をむく", "塩を塗る"],
    "answer": 1,
    "explanation": "水ぶくれは天然の包帯です。潰すとバイ菌が入りやすくなるので守ります。[55]",
    "reference": "Byouri.pdf p.759"
  },
  {
    "id": 91,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "喉に物が詰まったサイン、両手で喉を掴むポーズの名前は？",
    "options": ["ピースサイン", "チョークサイン", "Vサイン", "OKサイン"],
    "answer": 1,
    "explanation": "万国共通で「喉が詰まった」ことを知らせる世界共通のサインです。[63]",
    "reference": "Byouri.pdf p.807"
  },
  {
    "id": 92,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "頭を強く打った後、何度も吐く時はどうする？",
    "options": ["寝ていれば治る", "すぐに救急車を呼ぶ", "ご飯を食べる", "お風呂に入る"],
    "answer": 1,
    "explanation": "脳の中に出血が起きている可能性が高いため、至急病院へ行く必要があります。[64]",
    "reference": "Gaisyou.pdf p.717"
  },
  {
    "id": 93,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "耳の中に虫が入った時、やってはいけないことは？",
    "options": ["耳鼻科に行く", "無理やり耳かきでかき出す", "懐中電灯で照らす", "油を少し垂らす"],
    "answer": 1,
    "explanation": "無理にかき出すと虫が奥に逃げ、耳の壁を傷つけることがあります。[65]",
    "reference": "Byouri.pdf p.810"
  },
  {
    "id": 94,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "海でクラゲに刺された。まず何で洗う？",
    "options": ["真水", "海水（カツオノエボシなどの場合）", "お酒", "醤油"],
    "answer": 1,
    "explanation": "真水だと毒針が刺激されて発射されることがあるので、海水などで流します。[66]",
    "reference": "Byouri.pdf p.784"
  },
  {
    "id": 95,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "骨が折れて皮膚の外に突き出している。どうする？",
    "options": ["押し戻す", "そのまま清潔な布で覆って固定する", "洗剤で洗う", "引っ張る"],
    "answer": 1,
    "explanation": "無理に押し戻すと深い感染を起こすため、清潔な布で保護して急いで運びます。[67]",
    "reference": "Gaisyou.pdf p.753"
  },
  {
    "id": 96,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "寒い場所で指が白くなり、感覚がなくなるのは何？",
    "options": ["凍傷（とうしょう）", "日焼け", "筋肉痛", "ただの疲れ"],
    "answer": 0,
    "explanation": "冷えすぎて組織が凍ってしまう状態。ぬるま湯で温めるなどの処置をします。[68]",
    "reference": "Byouri.pdf p.836"
  },
  {
    "id": 97,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "赤ちゃんが小さなボタンを飲み込んだ。どうやって出す？",
    "options": ["下を向かせて背中を叩く", "指を突っ込んでかき出す", "お水をたくさん飲ませる", "逆立ちさせる"],
    "answer": 0,
    "explanation": "乳児の場合はうつ伏せにして頭を下げ、背中の真ん中を叩きます。[69]",
    "reference": "Kaibou.pdf p.648"
  },
  {
    "id": 98,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "火傷を冷やす時、氷を直接当ててもいい？",
    "options": ["いい", "だめ（皮膚を痛めることがある）", "ずっとならいい", "気持ちいいからいい"],
    "answer": 1,
    "explanation": "冷えすぎて凍傷になる恐れがあるため、氷よりは水道水が良いです。[70]",
    "reference": "Gaisyou.pdf p.711"
  },
  {
    "id": 99,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "足首をひねった。まずどうする？",
    "options": ["冷やして安静にする", "歩き回る", "温める", "揉みほぐす"],
    "answer": 0,
    "explanation": "腫れを最小限にするため、冷やして安静にするのが応急手当の基本です。[71]",
    "reference": "Gaisyou.pdf p.752"
  },
  {
    "id": 100,
    "level": "1",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "怪我で出血がひどい時、傷口を心臓よりどうする？",
    "options": ["低くする", "高くする", "同じにする", "隠す"],
    "answer": 1,
    "explanation": "心臓より高く上げることで、傷口への血圧が下がり血が止まりやすくなります。[58]",
    "reference": "Gaisyou.pdf p.705"
  },
  {
    "id": 1,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "成人の心肺機能停止傷病者に対し、心停止の判断を行う際に許容される最大時間は？",
    "options": ["5秒以内", "10秒以内", "15秒以内", "20秒以内"],
    "answer": 1,
    "explanation": "正常な呼吸および確実な脈拍の有無は、10秒以内に迅速に判断しなければなりません。[1], [2]",
    "reference": "救急救命処置等業務プロトコール p.1"
  },
  {
    "id": 2,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "成人の胸骨圧迫において、適切な深さとテンポの組み合わせはどれか？",
    "options": [
      "約4cm・毎分80〜100回",
      "約5cm（6cmを超えない）・毎分100〜120回",
      "約6cm以上・毎分120〜140回",
      "厚みの3分の1・毎分100回"
    ],
    "answer": 1,
    "explanation": "成人の胸骨圧迫は、約5cm沈むよう強く、毎分100〜120回の速いテンポで行う必要があります。[3]",
    "reference": "救急救命処置等業務プロトコール p.2"
  },
  {
    "id": 3,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "救助者が2人以上いる場合の乳児・新生児に対する胸骨圧迫と人工呼吸の回数比は？",
    "options": ["30:2", "15:1", "15:2", "3:1"],
    "answer": 2,
    "explanation": "救助者が2人以上の小児・乳児・新生児の場合、回数比は15:2となります。1人の場合は30:2です。[4]",
    "reference": "救急救命処置等業務プロトコール p.4"
  },
  {
    "id": 4,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "特定行為である「アドレナリンの投与」が適応となる対象年齢は？",
    "options": ["全年齢", "1歳以上", "8歳以上", "15歳以上"],
    "answer": 2,
    "explanation": "救急救命士によるアドレナリン投与の適応は、8歳以上の心臓機能停止傷病者と定められています。[5], [6]",
    "reference": "救急救命処置等業務プロトコール p.11, p.40"
  },
  {
    "id": 5,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "除細動を実施した後、次に優先すべき行動はどれか？",
    "options": [
      "直ちに脈拍を確認する",
      "直ちに心電図波形を解析する",
      "直ちに胸骨圧迫からCPRを再開する",
      "人工呼吸を2回行う"
    ],
    "answer": 2,
    "explanation": "除細動後は、波形を確認することなく直ちに胸骨圧迫からCPRを再開し、約2分間継続します。[7]",
    "reference": "救急救命処置等業務プロトコール p.19"
  },
  {
    "id": 6,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "包括的指示下での除細動において、心電図解析を繰り返す間隔は？",
    "options": ["1分ごと", "2分ごと", "3分ごと", "5分ごと"],
    "answer": 1,
    "explanation": "電気的除細動およびCPRのサイクルは、約2分間ごとに心電図解析を繰り返す手順となっています。[8]",
    "reference": "救急救命処置等業務プロトコール p.6"
  },
  {
    "id": 7,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "気管挿管の実施において、1回の挿入試行に要する時間は最大何秒以内か？",
    "options": ["10秒以内", "15秒以内", "30秒以内", "60秒以内"],
    "answer": 2,
    "explanation": "気管挿管の挿入に要する時間は、1回30秒以内と定められています。中断を最小限にするためです。[9]",
    "reference": "救急救命処置等業務プロトコール p.23"
  },
  {
    "id": 8,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "気管挿管チューブの位置確認において、もっとも信頼性が高い器具はどれか？",
    "options": [
      "食道挿管検知器",
      "波形表示機能付き呼気二酸化炭素検知器",
      "聴診器（5点聴診）",
      "パルスオキシメーター"
    ],
    "answer": 1,
    "explanation": "位置確認には波形表示付き呼気二酸化炭素検知器（カプノメータ）を使用し、波形が出現することを確認します。[10]",
    "reference": "救急救命処置等業務プロトコール p.24"
  },
  {
    "id": 9,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "自己心拍再開（ROSC）後、胸骨圧迫を中止する基準となる脈拍数は？",
    "options": ["触知できればいつでも", "40回/分以上", "50回/分以上", "60回/分以上"],
    "answer": 2,
    "explanation": "末梢動脈で1分間に50回以上の脈拍触知をもって胸骨圧迫の中止を判断します。[11], [12]",
    "reference": "救急救命処置等業務プロトコール p.16, p.42"
  },
  {
    "id": 10,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "静脈路確保の特定行為において、穿刺の試行回数は原則何回までか？",
    "options": ["1回のみ", "2回まで", "3回まで", "制限なし"],
    "answer": 1,
    "explanation": "静脈路確保のための穿刺手順は、現場滞在時間を考慮し原則2回までとされています。[13]",
    "reference": "救急救命処置等業務プロトコール p.38"
  },
  {
    "id": 11,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "アドレナリン1mgを静脈内投与した後、最初に行うべき補助的動作は？",
    "options": [
      "直ちに胸骨圧迫を再開する",
      "乳酸リンゲル液20ml程度を後押し投与し、上肢を挙上する",
      "2分間心電図を解析する",
      "すぐに次の方針を医師に確認する"
    ],
    "answer": 1,
    "explanation": "薬剤を速やかに全身循環へ届けるため、20mlの輸液で後押しし、上肢を10〜20秒挙上します。[14]",
    "reference": "救急救命処置等業務プロトコール p.40"
  },
  {
    "id": 12,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生中、目撃のある心停止で初期波形が心静止であった場合、まず優先すべき特定行為は？",
    "options": ["気管挿管", "静脈路確保とアドレナリン投与", "ラリンゲアルマスクによる気道確保", "3回目の除細動解析"],
    "answer": 1,
    "explanation": "心静止（非適応波形）の場合、早期のアドレナリン投与が生存率向上に寄与するため、優先的に準備します。[6], [15]",
    "reference": "救急救命処置等業務プロトコール p.40, p.42"
  },
  {
    "id": 13,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "高度の低体温が疑われる心停止傷病者に対し、脈拍確認にかけるべき時間は？",
    "options": ["10秒以内", "20〜30秒", "30〜45秒", "1分以上"],
    "answer": 2,
    "explanation": "高度低体温症では脈拍が極めて微弱なため、確認には30〜45秒かけて慎重に評価します。[16], [17]",
    "reference": "救急救命処置等業務プロトコール p.8, 救急活動の実際 p.813"
  },
  {
    "id": 14,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "BVM換気が良好な心原性心停止（VF）において、器具を用いた気道確保の優先順位はどう判断するか？",
    "options": [
      "最優先で実施する",
      "除細動の妨げにならないタイミングで考慮する",
      "搬送開始まで一切行わない",
      "アドレナリン投与を終えるまで行わない"
    ],
    "answer": 1,
    "explanation": "VF等の心原性疑いでは早期除細動が最優先です。器具による気道確保に時間をかけすぎて除細動を遅らせてはいけません。[18]",
    "reference": "救急救命処置等業務プロトコール p.21"
  },
  {
    "id": 15,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "気道異物による心停止で、吸引やマギール鉗子でも除去できない場合の気道確保の選択肢は？",
    "options": ["経鼻エアウェイ", "食道閉鎖式エアウェイ", "気管挿管", "経口エアウェイ"],
    "answer": 2,
    "explanation": "異物による窒息の心肺停止事例は救急救命士による気管挿管の適応となります。[19]",
    "reference": "救急救命処置等業務プロトコール p.22"
  },
  {
    "id": 16,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "妊婦（妊娠後半）の心停止に対し、胸骨圧迫を行う際に追加で考慮すべき手技は？",
    "options": ["右側臥位にする", "用手的子宮左方移動", "トレンデレンブルグ体位", "胸骨圧迫の位置を高くする"],
    "answer": 1,
    "explanation": "子宮による下大静脈の圧迫を軽減するため、用手的に子宮を左側に移動させながらCPRを行います。[20], [21]",
    "reference": "救急救命処置等業務プロトコール p.5, 救急活動の実際 p.675"
  },
  {
    "id": 17,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生中の人工呼吸において、1回あたりの送気にかける時間は？",
    "options": ["0.5秒", "1秒", "2秒", "3秒"],
    "answer": 1,
    "explanation": "全ての年齢層において、1回1秒かけて「胸の上がりが見える程度」の量を送気します。[22]",
    "reference": "救急救命処置等業務プロトコール p.3"
  },
  {
    "id": 18,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "気管内チューブの固定位置として、一般的な成人の門歯での目安は？",
    "options": ["15〜18cm", "19〜24cm", "25〜28cm", "30cm"],
    "answer": 1,
    "explanation": "門歯の位置で男性約20〜24cm、女性約19〜22cmが標準的な固定位置です。[23]",
    "reference": "救急救命処置等業務プロトコール p.361"
  },
  {
    "id": 19,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "救急救命士が心停止傷病者に対し「具体的指示」を必要とする処置はどれか？",
    "options": ["経口エアウェイの使用", "半自動式除細動器による除細動", "アドレナリンの投与", "BVMによる人工呼吸"],
    "answer": 2,
    "explanation": "アドレナリン投与、器具を用いた気道確保、静脈路確保等は医師の具体的指示が必要です。[24]",
    "reference": "救急救命処置等業務プロトコール p.10"
  },
  {
    "id": 20,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "胸骨圧迫の交代を行うタイミングとして、最も適切なのはどれか？",
    "options": [
      "3分ごと",
      "5サイクル（約2分）ごと",
      "疲労を感じた時のみ",
      "救急車内収容時のみ"
    ],
    "answer": 1,
    "explanation": "質の高い胸骨圧迫を維持するため、交代要員がいれば約2分（5サイクル）ごとに交代します。[20], [25]",
    "reference": "救急救命処置等業務プロトコール p.5, 救急活動の実際 p.376"
  },
  {
    "id": 21,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "アドレナリン投与後、効果判定のために心電図波形と脈拍を確認するタイミングは？",
    "options": [
      "投与直後",
      "投与から1分後",
      "投与後のCPR（2分間）終了後の経過観察時",
      "30秒ごとに確認する"
    ],
    "answer": 2,
    "explanation": "CPRの中断を最小限にするため、投与後2分間のCPRを完遂した後の経過観察時に確認します。[15]",
    "reference": "救急救命処置等業務プロトコール p.41"
  },
  {
    "id": 22,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "小児の心停止において、胸骨圧迫を開始する基準となる心拍数は？",
    "options": ["40回/分未満", "60回/分未満で循環不全を伴う場合", "100回/分未満", "脈が全く触れない場合のみ"],
    "answer": 1,
    "explanation": "小児・乳児では、十分な酸素化にもかかわらず心拍数60回/分未満で循環不良（蒼白・チアノーゼ）なら胸骨圧迫を開始します。[4], [26]",
    "reference": "救急救命処置等業務プロトコール p.4, 救急活動の実際 p.375"
  },
  {
    "id": 23,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "気管挿管の準備でスタイレットを挿入する際、特に注意すべきことは？",
    "options": [
      "できるだけ深く挿入する",
      "先端がチューブの側孔から出ないようにする",
      "スタイレットの先端を1cmほど外に出す",
      "潤滑剤は塗布しない"
    ],
    "answer": 1,
    "explanation": "組織損傷を防ぐため、スタイレットの先端はチューブの先端より出さないようにセットします。[23]",
    "reference": "救急救命処置等業務プロトコール p.361"
  },
  {
    "id": 24,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "AEDが「ショックは不要です」と指示した場合の対応は？",
    "options": [
      "直ちに脈拍を確認する",
      "直ちに胸骨圧迫からCPRを再開する",
      "意識の確認を行う",
      "次の解析まで見守る"
    ],
    "answer": 1,
    "explanation": "ショック不要であっても心停止の可能性があるため、直ちに胸骨圧迫を再開します。[27]",
    "reference": "救急救命処置等業務プロトコール p.20"
  },
  {
    "id": 25,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "アドレナリン投与の具体的指示を得る際、医師に伝えるべき最低限の情報に含まれないのは？",
    "options": ["性別・推定年齢", "現在の心電図波形", "既往歴・服用薬", "通報者の名前"],
    "answer": 3,
    "explanation": "指示を得るために必要なのは、傷病者の病態、波形、既往歴などの医療情報です。[24], [28]",
    "reference": "救急救命処置等業務プロトコール p.10, 救急活動の実際 p.250"
  },
  {
    "id": 26,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "胸骨圧迫中に実施される「CPRロック」の目的は？",
    "options": [
      "ストレッチャーのタイヤを固定する",
      "防振架台のサスペンションを固定し圧迫の逃げを防ぐ",
      "救急車のエンジンを停止させる",
      "特定行為の指示を自動的に記録する"
    ],
    "answer": 1,
    "explanation": "救急車内の防振架台が動くと圧迫の力が逃げるため、CPR時はロックが必要です。[26]",
    "reference": "救急活動の実際 p.375"
  },
  {
    "id": 27,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生中のカプノメータ値（ETCO2）が急激に上昇（例えば40mmHg以上）した場合、何を疑うか？",
    "options": ["チューブの逸脱", "自己心拍の再開（ROSC）", "胸骨圧迫の質の低下", "過換気状態"],
    "answer": 1,
    "explanation": "循環が回復すると蓄積していたCO2が排出されるため、ROSCの重要なサインとなります。[29]",
    "reference": "救急活動の実際 p.333"
  },
  {
    "id": 28,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "気管内吸引の実施において、1回の吸引時間は最大何秒以内か？",
    "options": ["5秒以内", "10秒以内", "15秒以内", "30秒以内"],
    "answer": 2,
    "explanation": "吸引による低酸素血症や無気肺を防ぐため、15秒以内に行います。[30]",
    "reference": "救急活動の実際 p.367"
  },
  {
    "id": 29,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "除細動器の電極パッドを貼る際、水分や胸毛がある場合の対応は？",
    "options": [
      "そのまま貼付して良い",
      "水分を拭き取り、必要なら除毛して密着させる",
      "パッドを二枚重ねて貼る",
      "貼付をあきらめてCPRのみ行う"
    ],
    "answer": 1,
    "explanation": "除細動の効果を高め火傷を防ぐため、皮膚を乾燥させ密着させることが必須です。[31]",
    "reference": "救急救命処置等業務プロトコール p.7"
  },
  {
    "id": 30,
    "level": "2",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "成人の心肺蘇生において、胸骨圧迫の中断時間を最大何秒以内に抑えるべきか？",
    "options": ["5秒以内", "10秒以内", "15秒以内", "30秒以内"],
    "answer": 1,
    "explanation": "絶え間ない胸骨圧迫が重要であり、処置による中断は10秒以内を目指します。[20]",
    "reference": "救急救命処置等業務プロトコール p.5"
  },
  {
    "id": 31,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "内因性ロードアンドゴーの生理学的基準における「呼吸数」の閾値は？",
    "options": ["12回未満または25回以上", "10回未満または30回以上", "8回未満または35回以上", "15回未満または20回以上"],
    "answer": 1,
    "explanation": "呼吸数が10/分未満または30/分以上は、生命維持が困難な内因性L&Gの基準です。[32]",
    "reference": "救急救命処置等業務プロトコール p.51"
  },
  {
    "id": 32,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "ショックを疑う傷病者において、血圧低下以前に現れる初期徴候はどれか？",
    "options": ["意識消失", "頻脈および皮膚の冷感・湿潤", "徐脈および発熱", "多尿"],
    "answer": 1,
    "explanation": "代償機転により初期は血圧が維持されるため、頻脈や皮膚所見（冷汗）が重要なサインです。[33], [34]",
    "reference": "救急活動の実際 p.465, p.330"
  },
  {
    "id": 33,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "JCS評価で「大きな声で呼びかけると開眼する」状態の判定はどれか？",
    "options": ["JCS 2", "JCS 10", "JCS 20", "JCS 30"],
    "answer": 2,
    "explanation": "普通の呼びかけで開眼が10、大きな声やゆさぶりで開眼が20となります。[35]",
    "reference": "救急活動の実際 p.310"
  },
  {
    "id": 34,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "「脳ヘルニア」を示唆する、ロードアンドゴーの判断基準となる徴候はどれか？",
    "options": [
      "JCS 10かつ頻脈",
      "JCS 200かつ異常肢位（除脳・除皮質）",
      "JCS 3かつ悪心",
      "呼吸数20回/分かつ発汗"
    ],
    "answer": 1,
    "explanation": "JCS三桁や二桁に瞳孔不同や異常肢位を伴う場合は、脳ヘルニアが切迫しています。[32]",
    "reference": "救急救命処置等業務プロトコール p.51"
  },
  {
    "id": 35,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "成人の橈骨動脈が触知不能で、頸動脈のみ触知可能な場合の推定収縮期血圧は？",
    "options": ["60mmHg程度", "80mmHg程度", "100mmHg程度", "不明"],
    "answer": 0,
    "explanation": "橈骨動脈が触れないが頸動脈は触れる場合、血圧は著明に低下（約60mmHg程度）しています。[36]",
    "reference": "救急活動の実際 p.308"
  },
  {
    "id": 36,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "毛細血管再充満時間（CRT）を判定する際、正常とされる秒数は？",
    "options": ["1秒以内", "2秒以内", "5秒以内", "10秒以内"],
    "answer": 1,
    "explanation": "爪床圧迫テストにより2秒以内に赤みが戻れば末梢循環は概ね正常と判断します。[37]",
    "reference": "救急活動の実際 p.321"
  },
  {
    "id": 37,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "クッシング徴候（頭蓋内圧亢進）におけるバイタルサインの特徴は？",
    "options": ["血圧低下と頻脈", "血圧上昇と徐脈", "血圧低下と徐脈", "血圧上昇と頻脈"],
    "answer": 1,
    "explanation": "頭蓋内圧が高まると、脳血流を維持しようと血圧が上がり、反射的に脈が遅くなります。[38]",
    "reference": "救急活動の実際 p.490"
  },
  {
    "id": 38,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "心外閉塞・拘束性ショック（心タンポナーデ等）に特徴的な身体所見は？",
    "options": ["皮膚の紅潮", "外頸静脈の怒張", "多尿", "高血圧"],
    "answer": 1,
    "explanation": "心臓への還流が妨げられるため、頸静脈が太く膨らむ怒張が観察されます。[39]",
    "reference": "救急活動の実際 p.513"
  },
  {
    "id": 39,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "呼吸の観察で「吸気時に胸骨上窩や肋間が陥凹する」状態を何と呼ぶか？",
    "options": ["クスマウル呼吸", "シーソー呼吸", "陥没呼吸", "チェーン・ストークス呼吸"],
    "answer": 2,
    "explanation": "上気道が狭窄している際に、一生懸命吸おうとして周囲が凹む呼吸を陥没呼吸と言います。[40]",
    "reference": "救急活動の実際 p.305"
  },
  {
    "id": 40,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "高齢者（65歳以上）の外傷において、重症と判断すべき収縮期血圧の閾値は？",
    "options": ["80mmHg未満", "90mmHg未満", "110mmHg未満", "130mmHg未満"],
    "answer": 2,
    "explanation": "高齢者は普段の血圧が高いため、110mmHg未満であっても重症である可能性が高いです。[41]",
    "reference": "救急活動の実際 p.330"
  },
  {
    "id": 41,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "頸髄損傷による「神経原性ショック」における脈拍の特徴はどれか？",
    "options": ["著明な頻脈", "徐脈（または正常範囲）", "不整脈", "欠滞"],
    "answer": 1,
    "explanation": "交感神経の遮断により、通常のショックと異なり脈拍が速くならず徐脈傾向になります。[42]",
    "reference": "救急活動の実際 p.731"
  },
  {
    "id": 42,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "肺胞でのガス交換が障害されていることを示す、SpO2の「重症以上」の目安は？",
    "options": ["98%未満", "95%未満", "90%未満", "85%未満"],
    "answer": 2,
    "explanation": "SpO2が90%を下回ると動脈血酸素分圧が急激に低下する危険域（重症）です。[43]",
    "reference": "救急活動の実際 p.329"
  },
  {
    "id": 43,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "視認できる出血がないにもかかわらずショック症状がある場合、まず疑うべき出血部位は？",
    "options": ["頭蓋内", "腹腔内・骨盤内", "筋肉内", "皮下"],
    "answer": 1,
    "explanation": "大量の血液が貯留できる体腔（腹腔や骨盤腔）での内出血を強く疑います。[44]",
    "reference": "救急活動の実際 p.463"
  },
  {
    "id": 44,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "GCS（グラスゴー・コーマ・スケール）の合計点において、「重症」とされるのは何点以下か？",
    "options": ["13点以下", "10点以下", "8点以下", "3点以下"],
    "answer": 2,
    "explanation": "GCS合計点が8点以下は、気道維持が困難とされる重症（昏睡）の基準です。[45]",
    "reference": "救急活動の実際 p.546"
  },
  {
    "id": 45,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "意識障害の随伴症状で「共同偏視」を認めた場合、何を強く疑うか？",
    "options": ["低血糖", "脳血管障害（脳卒中）", "薬物中毒", "熱中症"],
    "answer": 1,
    "explanation": "両目が片側に寄る共同偏視は、脳の病変部位（あるいは反対側）を示唆する重要な局在徴候です。[46]",
    "reference": "救急活動の実際 p.642"
  },
  {
    "id": 46,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "アナフィラキシーにおいて、生命の危険がある「ショック症状」の脈拍の定義は？",
    "options": [
      "60回/分未満または100回/分以上",
      "50回/分未満または120回/分以上",
      "140回/分以上のみ",
      "40回/分未満のみ"
    ],
    "answer": 1,
    "explanation": "アナフィラキシーでは極端な頻脈または徐脈（50未満/120以上）がショックの目安です。[47]",
    "reference": "救急救命処置等業務プロトコール p.44"
  },
  {
    "id": 47,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "呼吸の観察で「呼気が延長し、笛を吹くような音（ウィーズ）」が聞こえる場合の病態は？",
    "options": ["上気道閉塞", "閉塞性換気障害（喘息・COPD等）", "肺炎", "肺水腫"],
    "answer": 1,
    "explanation": "気管支が狭くなると、息を吐くのに時間がかかり、高調な音が聞こえます。[48]",
    "reference": "救急活動の実際 p.457"
  },
  {
    "id": 48,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "爪床圧迫テストにおいて、周囲が寒冷な環境である場合の注意点は？",
    "options": [
      "判定を1秒以内にする",
      "寒冷により血管が収縮し、時間が延長しやすいため他と総合判断する",
      "判定が正確になるため優先する",
      "意味がないので実施しない"
    ],
    "answer": 1,
    "explanation": "CRTは外気温の影響を強く受けるため、寒冷時はショックでなくても延長することがあります。[37]",
    "reference": "救急活動の実際 p.321"
  },
  {
    "id": 49,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "聴診で「心窩部での送気音（ゴボゴボ音）」が聞こえた場合に疑う状況は？",
    "options": ["気胸", "食道挿管", "正常な換気", "腸閉塞"],
    "answer": 1,
    "explanation": "胃に空気が入っている音であり、気管挿管時であれば食道挿管を意味します。[49]",
    "reference": "救急救命処置等業務プロトコール p.30"
  },
  {
    "id": 50,
    "level": "2",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "重症脳障害の評価において、痛み刺激に対して「手足を伸展する」姿勢はどちらか？",
    "options": ["除皮質肢位", "除脳肢位", "バレー徴候", "異常屈曲"],
    "answer": 1,
    "explanation": "除脳肢位は中脳レベルの深刻なダメージを示し、手足がピーンと伸びるのが特徴です。[35]",
    "reference": "救急活動の実際 p.310"
  },
  {
    "id": 51,
    "level": "2",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳卒中を疑う際の「CPSS（シンシナティ脳卒中スケール）」の3項目は何か？",
    "options": [
      "顔のゆがみ、上肢の麻痺、構音障害（呂律）",
      "視力障害、下肢の麻痺、頭痛",
      "血圧上昇、意識障害、嘔吐",
      "瞳孔不同、失語、片麻痺"
    ],
    "answer": 0,
    "explanation": "顔、腕、言葉の3点を確認し、1つでも異常があれば脳卒中の可能性が高いです。[50]",
    "reference": "救急救命処置等業務プロトコール p.53"
  },
  {
    "id": 52,
    "level": "2",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "「LVOスケール」において、該当項目がいくつ以上で血栓回収医療機関を選定するか？",
    "options": ["1項目以上", "2項目以上", "3項目以上", "全項目該当"],
    "answer": 1,
    "explanation": "2項目以上該当する場合、主幹脳動脈閉塞の可能性が高く、血栓回収の適応を検討します。[50]",
    "reference": "救急救命処置等業務プロトコール p.53"
  },
  {
    "id": 53,
    "level": "2",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳卒中プロトコールにおいて、LVOスケールの評価を「省略」して搬送を優先する疾患は？",
    "options": ["脳梗塞", "脳出血", "くも膜下出血", "一過性脳虚血発作（TIA）"],
    "answer": 2,
    "explanation": "くも膜下出血を疑う場合は、強い刺激を避けるためLVO評価を省略し、速やかに搬送します。[51]",
    "reference": "救急救命処置等業務プロトコール p.52"
  },
  {
    "id": 54,
    "level": "2",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "急性冠症候群（ACS）を疑う傷病者に対し、ルーチンの酸素投与が「不要」とされるSpO2値の基準は？",
    "options": ["85%以上", "90%以上", "94%以上", "98%以上"],
    "answer": 1,
    "explanation": "低酸素状態（目安90%未満）や頻呼吸等がなければ、高濃度酸素はむしろ有害になることがあります。[52]",
    "reference": "救急救命処置等業務プロトコール p.56"
  },
  {
    "id": 55,
    "level": "2",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "12誘導心電図測定において、測定よりも「心停止に備えた処置」を優先すべき不整脈は？",
    "options": ["心房細動（AF）", "多源性・多発性心室性期外収縮（PVC）", "1度房室ブロック", "洞性頻脈"],
    "answer": 1,
    "explanation": "多発するPVCやRonT型は心室細動に移行する危険が高いため、除細動の準備が先決です。[52]",
    "reference": "救急救命処置等業務プロトコール p.56"
  },
  {
    "id": 56,
    "level": "2",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳梗塞の血栓溶解療法（t-PA）の適応となる発症からの制限時間は？",
    "options": ["2時間以内", "4.5時間以内", "8時間以内", "24時間以内"],
    "answer": 1,
    "explanation": "t-PA療法は発症から4.5時間以内の治療開始が原則です。[50]",
    "reference": "救急救命処置等業務プロトコール p.53"
  },
  {
    "id": 57,
    "level": "2",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "ACSにおける典型的な「放散痛」の部位として、誤っているものはどれか？",
    "options": ["左肩・左腕", "下顎（あご）", "右足首", "心窩部（みぞおち）"],
    "answer": 2,
    "explanation": "心臓の痛みは左肩、首、顎、みぞおち等に広がるのが特徴ですが、足までは及びません。[50]",
    "reference": "救急救命処置等業務プロトコール p.55"
  },
  {
    "id": 58,
    "level": "2",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳卒中疑いの傷病者で、JCS 300かつ両側瞳孔散大を認める場合の判断は？",
    "options": ["経過観察", "低次救急搬送", "内因性ロードアンドゴー宣言", "意識回復を待つ"],
    "answer": 2,
    "explanation": "脳ヘルニア徴候であり、生命維持が極めて危ういため、直ちに最寄りの医療機関へ搬送します。[32]",
    "reference": "救急救命処置等業務プロトコール p.51"
  },
  {
    "id": 59,
    "level": "2",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "12誘導心電図の伝送が最も強く推奨される場面はいつか？",
    "options": [
      "全傷病者の活動において",
      "ACSを疑い、かつ搬送時間に余裕があり専門医の助言を得る場合",
      "心停止中",
      "擦過傷のみの場合"
    ],
    "answer": 1,
    "explanation": "早期診断と搬送先の選定（カテーテル治療可能施設）に有効なため、ACS疑い時に推奨されます。[53]",
    "reference": "救急活動の実際 p.339"
  },
  {
    "id": 60,
    "level": "2",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "「一過性脳虚血発作（TIA）」が疑われる場合の現場活動での注意点は？",
    "options": [
      "症状が消えたので搬送は不要",
      "後で脳梗塞になるリスクが高いため、専門病院へ搬送する",
      "歩行させて様子を見る",
      "血圧を上げる処置をする"
    ],
    "answer": 1,
    "explanation": "TIAは「脳梗塞の前触れ」であり、接触時に改善していても再発の危険が高いため、専門受診が不可欠です。[54]",
    "reference": "救急活動の実際 p.550"
  },
  {
    "id": 61,
    "level": "2",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "ショックの4分類のうち、アナフィラキシーや敗血症が含まれるのはどれか？",
    "options": [
      "循環血液量減少性ショック",
      "心原性ショック",
      "心外閉塞・拘束性ショック",
      "血液分布異常性ショック"
    ],
    "answer": 3,
    "explanation": "血管が異常に拡張し、血液が全身にうまく回らなくなるのが血液分布異常性ショックです。[55]",
    "reference": "救急活動の実際 p.462"
  },
  {
    "id": 62,
    "level": "2",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "心肺停止前の静脈路確保・輸液の適応として「除外」されるショックは？",
    "options": ["出血性ショック", "アナフィラキシー", "心原性ショック", "熱中症"],
    "answer": 2,
    "explanation": "心原性ショック（心筋梗塞等）への輸液は心不全を悪化させる恐れがあるため除外されます。[56], [57]",
    "reference": "救急救命処置等業務プロトコール p.47, 救急活動の実際 p.466"
  },
  {
    "id": 63,
    "level": "2",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "ブドウ糖溶液の投与指示を受けるための「血糖値」の基準は？",
    "options": ["30mg/dL未満", "50mg/dL未満", "70mg/dL未満", "100mg/dL未満"],
    "answer": 1,
    "explanation": "血糖測定の結果、50mg/dL未満であれば医師の具体的指示下でブドウ糖投与が可能です。[58]",
    "reference": "救急救命処置等業務プロトコール p.49"
  },
  {
    "id": 64,
    "level": "2",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "アナフィラキシー疑いに対し、救急救命士がエピペンを「代行使用」できる条件は？",
    "options": [
      "具体的指示を得た時のみ",
      "傷病者本人が持参しており、自ら使用できない状況",
      "傷病者の意識が清明な時のみ",
      "家族がいない時のみ"
    ],
    "answer": 1,
    "explanation": "本人が処方され携行しているエピペンであれば、包括的指示（代行）で使用可能です。[59]",
    "reference": "救急救命処置等業務プロトコール p.43"
  },
  {
    "id": 65,
    "level": "2",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "糖尿病の急性合併症で、呼気から「ケトン臭（甘酸っぱい臭い）」がするのは？",
    "options": ["低血糖症", "糖尿病ケトアシドーシス（DKA）", "高浸透圧高血糖症候群", "インスリノーマ"],
    "answer": 1,
    "explanation": "脂肪燃焼の結果生じるケトン体が呼気に漏れ、特有の臭いを発します。[60], [61]",
    "reference": "救急活動の実際 p.485, p.609"
  },
  {
    "id": 66,
    "level": "2",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "アナフィラキシーショックにおいて、エピペン投与の第1選択部位はどこか？",
    "options": ["上腕（二の腕）", "太もも（前外側）", "お尻（殿部）", "お腹"],
    "answer": 1,
    "explanation": "大腿部前外側（太ももの外側）へ、数秒間強く押し当てて注射します。[62]",
    "reference": "救急救命処置等業務プロトコール p.45"
  },
  {
    "id": 67,
    "level": "2",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "出血性ショックの傷病者に対し、現場で行うべき最も優先される処置は？",
    "options": ["急速輸液の開始", "活動性出血の直接圧迫止血", "保温", "詳しい病歴聴取"],
    "answer": 1,
    "explanation": "外出血がある場合、まずは直接圧迫による止血が最優先です。[33]",
    "reference": "救急活動の実際 p.464"
  },
  {
    "id": 68,
    "level": "2",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "低血糖による意識障害に対し、ブドウ糖を投与した後の評価はいつ行うか？",
    "options": ["10分後", "概ね2〜3分以内", "1時間後", "評価は不要"],
    "answer": 1,
    "explanation": "低血糖であれば速やかに意識が改善するため、数分以内に再評価を行います。[63]",
    "reference": "救急活動の実際 p.394"
  },
  {
    "id": 69,
    "level": "2",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "ショック状態で脈が速くなる生理的理由（代償）はどれか？",
    "options": [
      "血管を広げるため",
      "1回拍出量の減少を回数で補い、心拍出量を維持するため",
      "体温を下げるため",
      "酸素を消費しないようにするため"
    ],
    "answer": 1,
    "explanation": "血液量が減った分、心臓の回転数を上げて全身への血流を保とうとします。[64]",
    "reference": "救急活動の実際 p.483"
  },
  {
    "id": 70,
    "level": "2",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "脱水やショックにより、血液のpHが酸性に傾く状態を何と呼ぶか？",
    "options": ["アルカローシス", "アシドーシス", "ニュートラル", "ホメオスタシス"],
    "answer": 1,
    "explanation": "乳酸などが溜まることで体液が酸性になることをアシドーシスと言います。[44]",
    "reference": "救急活動の実際 p.463"
  },
  {
    "id": 71,
    "level": "2",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "外傷における「ロードアンドゴー」の生理学的評価項目に含まれるのは？",
    "options": [
      "血圧 140/90 mmHg",
      "JCS 100 以上の意識障害",
      "体温 37.5 度",
      "手指の擦過傷"
    ],
    "answer": 1,
    "explanation": "JCS三桁の意識障害、呼吸・循環の異常は直ちにL&Gの適応となります。[65]",
    "reference": "救急活動の実際 p.712"
  },
  {
    "id": 72,
    "level": "2",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "「緊張性気胸」を疑い、ロードアンドゴーの判断基準となる所見は？",
    "options": [
      "頸静脈の怒張・気管の偏位",
      "下肢のしびれ",
      "鼻出血",
      "腹部の軽度の圧痛"
    ],
    "answer": 0,
    "explanation": "胸腔内圧が極限まで高まり、頸静脈が膨らんだり気道が押されたりする所見は緊急事態です。[65]",
    "reference": "救急活動の実際 p.712"
  },
  {
    "id": 73,
    "level": "2",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "骨盤骨折を疑う傷病者に対し、搬送時に「行ってはいけない」手技は？",
    "options": ["骨盤固定具の装着", "不用意なログロール（側臥位への回転）", "毛布による保温", "高流量酸素投与"],
    "answer": 1,
    "explanation": "骨盤の動揺により大出血を招く恐れがあるため、横向きに回転させる操作は避けます。[66]",
    "reference": "救急活動の実際 p.745"
  },
  {
    "id": 74,
    "level": "2",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "「ターニケット（止血帯）」を使用する際、装着位置の原則は？",
    "options": [
      "出血部位の直上",
      "出血部位から 5〜8cm ほど近位（中枢側）",
      "出血部位から 20cm 以上離す",
      "心臓のすぐ近く"
    ],
    "answer": 1,
    "explanation": "出血部より少し上の動脈を確実に遮断できる位置に装着します。[67]",
    "reference": "救急活動の実際 p.753"
  },
  {
    "id": 75,
    "level": "2",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "開放性気胸（吸い込み創）に対する「三辺テーピング」の目的は？",
    "options": [
      "傷口を完全に密封する",
      "吸気時に空気が入るのを防ぎ、呼気時に胸腔内の空気を逃がす",
      "止血を行う",
      "肋骨の骨折を固定する"
    ],
    "answer": 1,
    "explanation": "一方向弁の役割をさせ、緊張性気胸への移行を防ぎつつ肺の虚脱を抑えます。[37]",
    "reference": "救急活動の実際 p.321"
  },
  {
    "id": 76,
    "level": "2",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "「クラッシュ症候群」の救出にあたって、救出前から開始すべき処置は？",
    "options": ["急速輸液の準備と実施", "患部のマッサージ", "温熱パックによる加温", "鎮痛薬の内服"],
    "answer": 0,
    "explanation": "圧迫解除後の毒素流入（高K血症等）に備え、救出前から輸液を開始することが推奨されます。[68]",
    "reference": "救急活動の実際 p.753"
  },
  {
    "id": 77,
    "level": "2",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "頸椎保護において、「中間位（ニュートラル）」が禁忌となる状況は？",
    "options": [
      "傷病者が意識障害である時",
      "中間位に動かそうとすると強い痛みや抵抗がある時",
      "ヘルメットを被っている時",
      "夜間の現場活動時"
    ],
    "answer": 1,
    "explanation": "無理に動かすと損傷を悪化させるため、抵抗がある場合はそのままの肢位で固定します。[69]",
    "reference": "救急活動の実際 p.732"
  },
  {
    "id": 78,
    "level": "2",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "切断された指の搬送方法として、正しいものはどれか？",
    "options": [
      "消毒液の中に浸す",
      "直接氷水に入れる",
      "湿らせたガーゼで包みビニール袋に入れ、氷水で冷却する",
      "常温で乾燥させたまま運ぶ"
    ],
    "answer": 2,
    "explanation": "組織の凍結や直接の水濡れを避けつつ、冷やして代謝を抑えるのが再接着の鍵です。[70]",
    "reference": "救急活動の実際 p.753"
  },
  {
    "id": 79,
    "level": "2",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "「外傷の三徴」と呼ばれる、死のサイクルを構成する要素は？",
    "options": [
      "低体温、凝固障害、アシドーシス",
      "高血圧、頻脈、多尿",
      "意識障害、麻痺、瞳孔不同",
      "呼吸困難、チアノーゼ、咳"
    ],
    "answer": 0,
    "explanation": "これらが相互に悪化し合うため、現場での保温と迅速な搬送が極めて重要です。[71]",
    "reference": "救急活動の実際 p.702"
  },
  {
    "id": 80,
    "level": "2",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "骨盤固定具を装着する際、ベルトを締めるべき正しい高さは？",
    "options": ["腰のくびれ部分", "おへその高さ", "大腿骨の大転子（足の付け根の出っ張り）の高さ", "膝の高さ"],
    "answer": 2,
    "explanation": "骨盤の輪を確実に閉じるため、大転子（恥骨結合）の高さで締めるのが正解です。[66]",
    "reference": "救急活動の実際 p.745"
  },
  {
    "id": 1,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "成人の心肺蘇生において、胸骨圧迫の深さとして適切なものはどれか？",
    "options": [
      "少なくとも5cm沈むまで（ただし6cmを超えない）",
      "胸の厚さの約3分の1",
      "少なくとも4cm沈むまで（ただし5cmを超えない）",
      "胸が完全に平らになるまで"
    ],
    "answer": 0,
    "explanation": "成人の胸骨圧迫は約5cm沈むまでしっかり圧迫し、かつ6cmを超えないように調整する必要があります。[1]",
    "reference": "救急蘇生法実施要領 p.2"
  },
  {
    "id": 2,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "小児（1歳から思春期以前）の心肺蘇生において、救助者が2名以上いる場合の胸骨圧迫と人工呼吸の回数比は？",
    "options": [
      "30：2",
      "15：2",
      "15：1",
      "30：1"
    ],
    "answer": 1,
    "explanation": "小児、乳児、新生児の場合、救助者が1名なら30：2ですが、2名以上の場合は15：2のサイクルを繰り返します。[2]",
    "reference": "救急蘇生法実施要領 p.4"
  },
  {
    "id": 3,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "アドレナリンの静脈内投与について、特定行為の適応となる最低年齢は？",
    "options": [
      "15歳",
      "1歳",
      "8歳",
      "思春期以降"
    ],
    "answer": 2,
    "explanation": "アドレナリンの投与は、8歳以上の心臓機能停止の傷病者が適応となります。[3]",
    "reference": "薬剤投与業務プロトコール p.40"
  },
  {
    "id": 4,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "除細動成功後、自己心拍再開（ROSC）を判断するための「胸骨圧迫の中止」基準として適切なのは？",
    "options": [
      "頸動脈での脈拍触知",
      "意識の回復（開眼）",
      "橈骨動脈等末梢動脈で毎分50回以上の脈拍触知",
      "心電図上での洞調律復帰"
    ],
    "answer": 2,
    "explanation": "胸骨圧迫の中止は、橈骨動脈等末梢動脈で1分間に50回以上の脈拍触知をもって判断します。[4, 5]",
    "reference": "心肺機能停止対応業務プロトコール p.16, 42"
  },
  {
    "id": 5,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生中に、用手的な気道確保にかかわらず換気抵抗が著しく、異物による気道閉塞が疑われる場合の対応で誤っているのはどれか？",
    "options": [
      "喉頭鏡を使用して異物を確認する",
      "異物があればマギール鉗子で除去する",
      "盲目的指拭法を直ちに行う",
      "できるだけ胸骨圧迫を継続しながら行う"
    ],
    "answer": 2,
    "explanation": "盲目的指拭法は推奨されません。喉頭鏡で確認し、視認できる場合に除去します。[6]",
    "reference": "人工呼吸実施上の注意事項 p.3"
  },
  {
    "id": 6,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "救急救命士が特定行為を行うにあたり、医師の具体的指示を受けるために伝えるべき「医療情報」として、プロトコールに明記されていないのはどれか？",
    "options": [
      "全身状態",
      "心電図波形",
      "搬送先の空床状況",
      "人工呼吸による換気の良否"
    ],
    "answer": 2,
    "explanation": "具体的指示に必要な情報は、全身状態、心電図波形、換気の良否など傷病者の医学的状況です。空床状況は選定に関わる情報です。[7, 8]",
    "reference": "特定行為の適応 p.11, 救急医療体制 p.222"
  },
  {
    "id": 7,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "気管挿管の適応外（禁忌）となる例として、ビデオ硬性喉頭鏡を使用する場合でも除外されない条件はどれか？",
    "options": [
      "頸髄損傷が強く疑われる場合",
      "開口困難と考えられる例",
      "頭部後屈困難例",
      "喉頭鏡挿入後喉頭展開困難例"
    ],
    "answer": 1,
    "explanation": "開口困難（開口1横指以下など）は、ビデオ喉頭鏡であっても挿入が物理的に困難なため適応外となります。[9]",
    "reference": "気管挿管業務プロトコール p.23"
  },
  {
    "id": 8,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "静脈路確保の特定行為において、穿刺の試行回数は原則として何回までと定められているか？",
    "options": [
      "1回",
      "2回",
      "3回",
      "成功するまで"
    ],
    "answer": 1,
    "explanation": "静脈路確保のための穿刺手順は、原則2回までとされています。[10]",
    "reference": "静脈路確保業務プロトコール p.38"
  },
  {
    "id": 9,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "アドレナリン投与後の処置として、薬液を全身に回すために行う正しい手技は？",
    "options": [
      "投与部位をマッサージする",
      "乳酸リンゲル液20ml程度を一時全開で滴下または後押しし、上肢を10～20秒挙上する",
      "投与した側の腕を下げる",
      "直ちに10回程度の速い人工呼吸を行う"
    ],
    "answer": 1,
    "explanation": "薬剤の全身分布を促すため、投与後は乳酸リンゲル液20mlの後押しと上肢の挙上が必要です。[11, 12]",
    "reference": "薬剤投与業務プロトコール p.40, 救急蘇生法 p.424"
  },
  {
    "id": 10,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "気管挿管のチューブ位置確認において、波形表示機能付き呼気二酸化炭素検知器が使用できない場合に使用する器具は？",
    "options": [
      "パルスオキシメーター",
      "血圧計のマンシェット",
      "食道挿管検知器（エアウェイチェッカー）",
      "胃管"
    ],
    "answer": 2,
    "explanation": "波形表示機能付きカプノメータがない場合は、食道挿管検知器（エアウェイチェッカー）および波形表示のない検知器を使用します。[13, 14]",
    "reference": "気管挿管業務プロトコール p.24, 34"
  },
  {
    "id": 11,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳卒中プロトコールにおいて、「内因性ロード＆ゴー」を宣言すべき指標として誤っているのはどれか？",
    "options": [
      "JCS300で両側瞳孔散大",
      "JCS200で異常肢位（除脳・除皮質肢位）",
      "JCS一桁でめまいを訴える",
      "GCS合計点が8以下で瞳孔不同を伴う"
    ],
    "answer": 2,
    "explanation": "JCS一桁のめまいのみではロード＆ゴーの条件を満たしません。意識障害の深さや瞳孔異常、異常肢位が判断基準です。[15, 16]",
    "reference": "脳卒中プロトコール p.52, 急性冠症候群プロトコール p.55"
  },
  {
    "id": 12,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "LVOスケール（主幹脳動脈閉塞）の評価項目に含まれないのはどれか？",
    "options": [
      "共同偏視",
      "失語",
      "血圧左右差",
      "半側空間無視"
    ],
    "answer": 2,
    "explanation": "LVOスケールは、脈不整、共同偏視、半側空間無視、失語、顔面麻痺、上肢麻痺の6項目で評価します。[17]",
    "reference": "脳卒中プロトコール p.53"
  },
  {
    "id": 13,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "急性冠症候群（ACS）が疑われる傷病者に対し、ルーチンでの酸素投与を行わない場合の判断基準（SpO2値）は？",
    "options": [
      "94%以上",
      "90%以上",
      "98%以上",
      "96%以上"
    ],
    "answer": 1,
    "explanation": "ACS疑いでは、低酸素状態（SpO2 90%未満目安）でない限り、ルーチンでの酸素投与は推奨されません。[18]",
    "reference": "急性冠症候群プロトコール p.56"
  },
  {
    "id": 14,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳梗塞の血栓溶解療法（t-PA療法）の適応となる発症からの制限時間は？",
    "options": [
      "3時間以内",
      "4.5時間以内",
      "6時間以内",
      "24時間以内"
    ],
    "answer": 1,
    "explanation": "t-PA療法は発症後4.5時間以内に行う必要があります。[19, 20]",
    "reference": "脳卒中プロトコール p.52, 神経系疾患 p.549"
  },
  {
    "id": 15,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "急性心筋梗塞における不整脈で、心室細動へ移行する恐れが高いため、12誘導心電図測定よりも心停止に備えた処置を優先すべきなのはどれか？",
    "options": [
      "洞性頻脈",
      "第1度房室ブロック",
      "RonT型心室性期外収縮",
      "心房細動"
    ],
    "answer": 2,
    "explanation": "RonT型、多源性、多発性心室性期外収縮などは、致死的不整脈への移行リスクが高いため優先順位が変わります。[21, 22]",
    "reference": "急性冠症候群プロトコール p.55, 56"
  },
  {
    "id": 16,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "心肺機能停止前における低血糖発作症例へのブドウ糖溶液投与の適応となる血糖値は？",
    "options": [
      "70mg/dL未満",
      "60mg/dL未満",
      "50mg/dL未満",
      "80mg/dL未満"
    ],
    "answer": 2,
    "explanation": "血糖値が50mg/dL未満である傷病者がブドウ糖溶液投与の対象となります。[23, 24]",
    "reference": "低血糖発作症例へのブドウ糖溶液の投与プロトコール p.49, 救急救命士が行う処置 p.392"
  },
  {
    "id": 17,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "アナフィラキシーショックにおいて、血圧低下以外に認めるべき「生命が危険な状態」の確認項目に含まれないのはどれか？",
    "options": [
      "意識：JCSⅡ-10以上",
      "呼吸：30回/分以上",
      "脈拍：120回/分以上",
      "体温：38.5℃以上"
    ],
    "answer": 3,
    "explanation": "アナフィラキシーショックの確認項目に体温は含まれません。意識、呼吸、血圧、脈拍、SpO2が主要項目です。[25]",
    "reference": "エピペン実施プロトコール p.44"
  },
  {
    "id": 18,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "心原性ショック（左心不全による肺うっ血を伴う）の傷病者に対し、血圧低下がない場合の適切な体位は？",
    "options": [
      "仰臥位",
      "足側高位（ショック体位）",
      "半坐位または坐位",
      "腹臥位"
    ],
    "answer": 2,
    "explanation": "肺うっ血を伴う場合、血圧低下がなければ静脈還流を減らすために半坐位や坐位が推奨されます。[26, 27]",
    "reference": "ショック p.467, 呼吸困難 p.515"
  },
  {
    "id": 19,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "糖尿病ケトアシドーシスで見られる、深く大きな呼吸様式を何と呼ぶか？",
    "options": [
      "チェーン・ストークス呼吸",
      "クスマウル呼吸",
      "ビオー呼吸",
      "シーソー呼吸"
    ],
    "answer": 1,
    "explanation": "代謝性アシドーシスを代償するために起こる深く速い呼吸をクスマウル呼吸と呼びます。[28, 29]",
    "reference": "意識障害 p.490, 呼吸困難 p.514"
  },
  {
    "id": 20,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "心外閉塞・拘束性ショックの一つである心タンポナーデにおいて、吸気時に収縮期血圧が10mmHg以上低下する現象を何と呼ぶか？",
    "options": [
      "クッシング現象",
      "交互脈",
      "奇脈",
      "不整脈"
    ],
    "answer": 2,
    "explanation": "心タンポナーデに特徴的な所見で、吸気時に血圧が低下する現象を奇脈と呼びます。[30, 31]",
    "reference": "ショック p.468, 循環に関する観察 p.309"
  },
  {
    "id": 21,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "重症熱中症（熱射病）の応急処置として、もっとも効率的に体温を下げる方法はどれか？",
    "options": [
      "太い血管（腋窩・頸部）に氷嚢を当てる",
      "体表面を水で濡らして送風し、気化熱を利用する",
      "氷水を飲ませる",
      "冷たいタオルを全身にかける"
    ],
    "answer": 1,
    "explanation": "体表面を濡らして強力に送風する方法が、広範囲の冷却と気化熱によりもっとも効率的です。[32, 33]",
    "reference": "熱中症 p.819, 体温上昇 p.544"
  },
  {
    "id": 22,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "脊髄損傷に伴う「神経原性ショック」の特徴的なバイタルサインはどれか？",
    "options": [
      "頻脈・血圧低下・冷汗",
      "徐脈・血圧低下・皮膚乾燥・温感",
      "頻脈・血圧上昇・顔面紅潮",
      "徐脈・血圧上昇・呼吸抑制"
    ],
    "answer": 1,
    "explanation": "交感神経遮断により、血管拡張と徐脈が起こり、皮膚は温かく乾燥しているのが特徴です。[34, 35]",
    "reference": "ショック p.469, 脊椎・脊髄外傷 p.730"
  },
  {
    "id": 23,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "高エネルギー事故における現場トリアージ（JPTEC）で、収縮期血圧のカットオフ値として重症外傷を疑う値はどれか？",
    "options": [
      "100mmHg未満",
      "90mmHg未満",
      "80mmHg未満",
      "110mmHg未満"
    ],
    "answer": 1,
    "explanation": "生理学的評価の第1段階として、収縮期血圧90mmHg未満は重症（ロード＆ゴー）の基準です。[36, 37]",
    "reference": "緊急度・重症度判断 p.329, 消防機関における救急活動の流れ p.712"
  },
  {
    "id": 24,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "溺水傷病者において、冷水による刺激で起こる高度徐脈や心室性不整脈から意識障害を生じる病態を何と呼ぶか？",
    "options": [
      "潜水反射",
      "浸漬症候群",
      "二次性溺水",
      "低体温症"
    ],
    "answer": 1,
    "explanation": "冷水への浸漬による反射的な徐脈や不整脈で意識を失うことを浸漬症候群と呼びます。[38]",
    "reference": "溺水 p.812"
  },
  {
    "id": 25,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "広範囲熱傷における熱傷面積の推定において、「成人の片方の腕全体」の面積は「9の法則」で何％とされるか？",
    "options": [
      "18%",
      "4.5%",
      "9%",
      "1%"
    ],
    "answer": 2,
    "explanation": "9の法則では、頭部9％、片腕9％、前体幹18％、後体幹18％、片脚18％となります。[39]",
    "reference": "熱傷 p.762"
  },
  {
    "id": 26,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "特定行為の指示要請において、医師に伝達すべき「環境状況」に含まれるのはどれか？",
    "options": [
      "現在の心電図波形",
      "傷病者の過去の病歴",
      "医療機関到着までの予測時間",
      "家族の同意の有無"
    ],
    "answer": 2,
    "explanation": "具体的指示に必要な環境状況には、発生場所の環境や医療機関到着までの時間が含まれます。[8]",
    "reference": "救急医療体制 p.222"
  },
  {
    "id": 27,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "妊娠20週以降の母体に対する心肺蘇生において、下大静脈の圧迫を軽減するために行う手技は？",
    "options": [
      "ショック体位",
      "用手的子宮左方移動",
      "右側臥位",
      "トレンデレンブルグ体位"
    ],
    "answer": 1,
    "explanation": "妊娠子宮による静脈還流阻害を防ぐため、子宮を左側に移動させます。[40, 41]",
    "reference": "心肺蘇生法実施上の注意事項 p.5, 妊娠・分娩と救急疾患 p.674"
  },
  {
    "id": 28,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "気管挿管の試行中に「声門の確認」のために許容される胸骨圧迫の中断時間は最大で何秒か？",
    "options": [
      "5秒",
      "10秒",
      "15秒",
      "30秒"
    ],
    "answer": 1,
    "explanation": "挿管全体を通じ胸骨圧迫は可能な限り中断せず、中断する場合も目標は10秒以内です。[13, 14]",
    "reference": "気管挿管業務プロトコール p.24, 34"
  },
  {
    "id": 29,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "クラッシュ（圧挫）症候群の疑いに対する輸液の目的として、誤っているのはどれか？",
    "options": [
      "循環血液量の確保",
      "高カリウム血症の希釈・排泄促進",
      "低血糖の改善",
      "急性腎不全の予防"
    ],
    "answer": 2,
    "explanation": "クラッシュ症候群への輸液は血量維持と有害物質（K、ミオグロビン）の排泄促進、腎保護が目的です。血糖改善は目的ではありません。[42, 43]",
    "reference": "四肢外傷 p.750, 753"
  },
  {
    "id": 30,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "頭部外傷において、受傷直後に髄液漏（髄液鼻漏・耳漏）の有無を確認するもっとも有効な方法はどれか？",
    "options": [
      "髄液の色を視診で確認する",
      "ガーゼに付着させて「二重の輪（ダブルリングサイン）」を確認する",
      "髄液の粘稠度を触診で確認する",
      "傷病者に鼻をかんでもらう"
    ],
    "answer": 1,
    "explanation": "血液に髄液が混じっている場合、ガーゼ上で二重の輪ができるのが特徴的な所見です。[44]",
    "reference": "頭部外傷 p.719"
  },
   {
    "id": 31,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生中、カプノメータのETCO2値が急激に上昇（例えば15mmHgから40mmHgへ）した場合に最も強く疑われる状況はどれか？",
    "options": ["食道挿管の発生", "自己心拍の再開（ROSC）", "胸骨圧迫の質の低下", "過換気状態への移行"],
    "answer": 1,
    "explanation": "ETCO2の急激な上昇は、心拍再開により組織で停滞していた二酸化炭素が肺へ運ばれ始めたことを示す重要なサインです。[1, 2]",
    "reference": "業務プロトコール p.20, 観察資器材 p.333"
  },
  {
    "id": 32,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "二相性除細動器を用いた電気ショックにおいて、初回エネルギー量の設定としてJRC蘇生ガイドライン2015に基づき適切なものはどれか？",
    "options": ["一律360J", "一律150J", "メーカーが推奨する設定（通常120〜200J）", "傷病者の体重1kgあたり2J"],
    "answer": 2,
    "explanation": "単相性は360J固定ですが、二相性は機種により波形が異なるためメーカー推奨値を用います。[3, 4]",
    "reference": "業務プロトコール p.6, 救急蘇生法 p.379"
  },
  {
    "id": 33,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "成人に対しバッグ・バルブ・マスクで人工呼吸を行う際、1回にかける送気時間として適切なのはどれか？",
    "options": ["約0.5秒", "約1秒", "約2秒", "胸が上がりきるまで（時間制限なし）"],
    "answer": 1,
    "explanation": "送気は1回につき約1秒かけて、胸が上がるのが確認できる程度に行います。過剰な換気は胸腔内圧を高め静脈還流を阻害します。[5, 6]",
    "reference": "救急蘇生法実施要領 p.3, 救急蘇生法 p.421"
  },
  {
    "id": 34,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "ラリンゲアルマスク（LMA）のサイズ選択において、体重60kgの成人に適応するサイズはどれか？",
    "options": ["サイズ3", "サイズ4", "サイズ5", "サイズ2.5"],
    "answer": 1,
    "explanation": "ラリンゲアルマスクのサイズ4は、適応体重50〜70kgの成人に使用します。[7, 8]",
    "reference": "業務プロトコール p.22, 救急救命士が行う処置 p.352"
  },
  {
    "id": 35,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "気管挿管の適応条件（成人の心停止）において、マッキントッシュ型喉頭鏡を使用する際、コーマック分類のどのグレードまでが救急救命士の試行対象か？",
    "options": ["グレード1のみ", "グレード2まで", "グレード3まで", "グレードに関わらず試行可能"],
    "answer": 0,
    "explanation": "救急救命士が直接視認下で挿管を試みるのは、声門がすべて視認できるグレード1に限られます。[9, 10]",
    "reference": "気管挿管業務プロトコール p.34, 救急救命士が行う処置 p.362"
  },
  {
    "id": 36,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "標準12誘導心電図において、V4誘導の電極を装着すべき正しい位置はどれか？",
    "options": ["第4肋間胸骨左縁", "第5肋間左鎖骨中線", "第5肋間左前腋窩線", "第4肋間胸骨右縁"],
    "answer": 1,
    "explanation": "V4は第5肋間と左鎖骨中線の交点に装着します。解剖学的指標を正確に把握する必要があります。[11, 12]",
    "reference": "循環系 p.113, 観察資器材 p.337"
  },
  {
    "id": 37,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳卒中が疑われる傷病者に対しLVO（主幹脳動脈閉塞）評価を行ったところ、「失語」と「共同偏視」を認めた。この場合の搬送先選定として適切なのは？",
    "options": ["最寄りの救急告示病院", "一次脳卒中センター（PSC）", "血栓回収医療機関", "精神科二次救急病院"],
    "answer": 2,
    "explanation": "LVOスケールで2項目以上（失語、共同偏視）該当するため、機械的血栓回収療法の適応を考慮し血栓回収医療機関を選定します。[13, 14]",
    "reference": "脳卒中プロトコール p.53, 54"
  },
  {
    "id": 38,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "アドレナリン自己注射薬（エピペン）の投与について、体重25kgの小児に処方されるべき製剤の容量はどれか？",
    "options": ["0.1mg", "0.15mg", "0.3mg", "0.5mg"],
    "answer": 1,
    "explanation": "体重15kg以上30kg未満の場合は0.15mg製剤、30kg以上の場合は0.3mg製剤が適応となります。[15, 16]",
    "reference": "エピペン実施プロトコール p.44, 救急救命士が行う処置 p.391"
  },
  {
    "id": 39,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "糖尿病ケトアシドーシスによる意識障害で見られる「クスマウル呼吸」の機序として正しいのはどれか？",
    "options": ["脳圧上昇による呼吸中枢の圧迫", "高血糖による浸透圧利尿の代償", "代謝性アシドーシスに対する呼吸性代償（CO2排出）", "肺胞低換気による低酸素血症の代償"],
    "answer": 2,
    "explanation": "ケトン体蓄積による代謝性アシドーシスを是正するため、呼吸によって二酸化炭素を排出しようとする反応です。[17, 18]",
    "reference": "代謝・内分泌系疾患 p.610, 生命の維持 p.160"
  },
  {
    "id": 40,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "「熱中症分類2015」において、意識障害（JCS II-10）と小脳症状（運動失調）を認める傷病者の重症度はどれか？",
    "options": ["I度", "II度", "III度", "IV度"],
    "answer": 2,
    "explanation": "JCS II桁以上の中枢神経症状や小脳症状を認める場合はIII度（入院・集中治療が必要）に分類されます。[19]",
    "reference": "熱中症 p.816"
  },
  {
    "id": 41,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "脊髄損傷において、乳頭の高さ（T4）まで感覚脱失を認める場合、損傷部位として推定される神経節はどれか？",
    "options": ["第2胸髄節（T2）", "第4胸髄節（T4）", "第10胸髄節（T10）", "第12胸髄節（T12）"],
    "answer": 1,
    "explanation": "デルマトームにおいて乳頭の高さは第4胸髄節（T4）の支配領域です。[20]",
    "reference": "神経系 p.85, 脊椎・脊髄外傷 p.731"
  },
  {
    "id": 42,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "成人の心停止において、胸骨圧迫の中断を最小限にするための目標時間は、特別な状況を除き何秒以内とされているか？",
    "options": ["5秒以内", "10秒以内", "15秒以内", "20秒以内"],
    "answer": 1,
    "explanation": "除細動器の解析や人工呼吸などのための胸骨圧迫中断は、可能な限り10秒以内にとどめる必要があります。[21, 22]",
    "reference": "心肺蘇生法実施要領 p.5, 救急蘇生法 p.420"
  },
  {
    "id": 43,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "特定行為の指示要請において、医師に伝えるべき「病態の重症度」に関わる身体所見として、プロトコールで強調されているのはどれか？",
    "options": ["体温の異常", "麻痺の有無", "人工呼吸による換気の良否", "皮膚の損傷範囲"],
    "answer": 2,
    "explanation": "具体的指示に必要な情報として、特に人工呼吸による換気の良否や全身状態、心電図波形が重要視されています。[23, 24]",
    "reference": "救急救命処置について p.10, 救急医療体制 p.222"
  },
  {
    "id": 44,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "急性冠症候群（ACS）プロトコールにおいて、12誘導心電図測定よりも除細動の準備など心停止への備えを優先すべき不整脈はどれか？",
    "options": ["洞性徐脈", "心房細動", "多源性心室性期外収縮", "第1度房室ブロック"],
    "answer": 2,
    "explanation": "多源性、多発性、RonT型の心室性期外収縮は、心室細動に移行するリスクが高いため優先順位が変わります。[25, 26]",
    "reference": "急性冠症候群プロトコール p.56, 循環系疾患 p.572"
  },
  {
    "id": 45,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "低血糖発作に対するブドウ糖投与において、投与後に輸液の滴下速度をどのように調節すべきか？",
    "options": ["全開（急速輸液）", "1秒1滴程度（維持輸液）", "直ちに滴下を中止", "心拍数に合わせて調節"],
    "answer": 1,
    "explanation": "ブドウ糖投与終了後は、静脈路を維持するために維持輸液（1秒1滴程度）に調節します。[27, 28]",
    "reference": "ブドウ糖溶液の投与プロトコール p.49, 救急救命士が行う処置 p.393"
  },
  {
    "id": 46,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "高エネルギー外傷における現場トリアージの「第1段階（生理学的評価）」で、呼吸数に関して重症（赤）と判断する基準はどれか？",
    "options": ["12〜20回/分", "10〜29回/分", "10回/分未満または30回/分以上", "25回/分以上"],
    "answer": 2,
    "explanation": "成人において呼吸数が10回/分未満、あるいは30回/分以上の場合は、生理学的に不安定とみなし緊急治療群と判断します。[14, 29]",
    "reference": "急性冠症候群プロトコール p.55, 災害医療体制 p.237"
  },
  {
    "id": 47,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "妊婦の心停止に対する心肺蘇生において、子宮左方移動（LUD）を行う主な目的はどれか？",
    "options": ["胎児への直接刺激を避けるため", "横隔膜の挙上を防ぐため", "下大静脈の圧迫を解除し静脈還流量を増やすため", "AEDの電極パッドを貼りやすくするため"],
    "answer": 2,
    "explanation": "仰臥位による子宮の下大静脈・大動脈圧迫（仰臥位低血圧症候群）を回避し、蘇生効果を高めるのが目的です。[21, 30]",
    "reference": "心肺蘇生法実施上の注意事項 p.5, 妊娠・分娩と救急疾患 p.672"
  },
  {
    "id": 48,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "気管挿管成功後の確認において、「食道挿管検知器（エアウェイチェッカー）」が再膨張しない場合に考えられる状況はどれか？",
    "options": ["気管内に正しく留置されている", "食道内に誤挿入されている", "肺活量が非常に大きい", "カフの空気が不足している"],
    "answer": 1,
    "explanation": "食道は虚脱しやすいため、シリンジを引いても抵抗があり再膨張しない場合は食道挿管を強く疑います。[10, 31]",
    "reference": "気管挿管業務プロトコール p.24, 救急救命士が行う処置 p.361"
  },
  {
    "id": 49,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "シンシナティ脳卒中スケール（CPSS）の「上肢の麻痺」を評価する際、傷病者に保持させる姿勢として正しいのはどれか？",
    "options": ["目を開けて両手を水平に前に出す", "目を閉じて両手を水平に前に出す", "手のひらを下に向けて胸の高さで保持する", "指を複雑に動かしてもらう"],
    "answer": 1,
    "explanation": "視覚代償を排除するため、閉眼状態で10秒間両腕を前に出し、片方が下がってこないかを確認します。[13, 32]",
    "reference": "脳卒中プロトコール p.53, 救急救命士が行う処置 p.324"
  },
  {
    "id": 50,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "重症アナフィラキシーでアドレナリン（エピペン）を投与した際、期待される主な生理作用はどれか？",
    "options": ["血管拡張と気管支収縮", "心拍数減少と血圧低下", "血管収縮と気管支拡張", "副交感神経の活性化"],
    "answer": 2,
    "explanation": "α作用による血管収縮で血圧を上げ、β作用による気管支拡張で呼吸を改善します。[16, 33]",
    "reference": "救急救命士が行う処置 p.389, 391"
  },
  {
    "id": 51,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "骨盤骨折が疑われる傷病者に対し、ログロール（側臥位への回転）を原則として避けるべき理由は何か？",
    "options": ["痛みによるショックを誘発するため", "骨盤腔内の血腫のタンポナーデ効果を消失させ、大出血を招く恐れがあるため", "下肢の運動麻痺を確認しやすくするため", "脊髄損傷を悪化させるため"],
    "answer": 1,
    "explanation": "不安定型骨盤骨折では、動揺により自己止血（タンポナーデ）が壊れ、致死的な再出血を起こす危険があります。[34, 35]",
    "reference": "外傷の現場活動 p.711, 骨盤外傷 p.745"
  },
  {
    "id": 52,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "小児の心肺蘇生において、救助者が1名の場合の胸骨圧迫と人工呼吸の回数比はどれか？",
    "options": ["15：2", "30：2", "15：1", "30：1"],
    "answer": 1,
    "explanation": "救助者が1名の場合は成人同様30：2ですが、2名以上の場合は15：2に切り替えます。[36, 37]",
    "reference": "心肺蘇生法実施要領 p.4, 救急蘇生法 p.425"
  },
  {
    "id": 53,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "ビデオ硬性喉頭鏡（エアウェイスコープ等）を使用する場合のメリットとして誤っているのはどれか？",
    "options": ["スニッフィングポジションが取れない症例でも喉頭展開しやすい", "モニターを通じて複数人で声門通過を確認できる", "血液や吐物が口腔内に充満していても常に鮮明な視界が保たれる", "頸椎の動揺を最小限に抑えて挿管できる"],
    "answer": 2,
    "explanation": "カメラレンズが汚れると視界が奪われるため、吸引などの事前処置が重要です。汚染には弱いです。[38, 39]",
    "reference": "救急救命士が行う処置 p.364, 365"
  },
  {
    "id": 54,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "急性心筋梗塞の12誘導心電図において、II, III, aVF 誘導で ST上昇を認めた場合、心臓のどの壁の梗塞が疑われるか？",
    "options": ["前壁", "側壁", "下壁", "後壁"],
    "answer": 2,
    "explanation": "II, III, aVFは心臓を足側から見た誘導であり、下壁梗塞を反映します。[40, 41]",
    "reference": "循環系疾患 p.570, 578"
  },
  {
    "id": 55,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "血液分布異常性ショックの一つである神経原性ショックにおいて、他のショックと異なり皮膚が「温かく、乾燥」している理由はどれか？",
    "options": ["交感神経の過緊張による発汗", "副交感神経の遮断による血流低下", "交感神経遮断による末梢血管の拡張", "高熱による水分の蒸散"],
    "answer": 2,
    "explanation": "脊髄損傷等で交感神経が遮断されると、血管収縮ができず拡張するため、皮膚温が保たれ乾燥します。[42]",
    "reference": "脊椎・脊髄外傷 p.730"
  },
  {
    "id": 56,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "広範囲熱傷において、気道熱傷（気道損傷）を疑うべき臨床所見として最も重要なのはどれか？",
    "options": ["四肢のⅢ度熱傷", "鼻毛の焦げやくすんだ色の痰", "腹部の水疱形成", "受傷直後の血圧低下"],
    "answer": 1,
    "explanation": "閉鎖空間での受傷や鼻毛の焦げ、口腔内の煤、嗄声などは気道熱傷の強い示唆となります。[43]",
    "reference": "熱傷 p.760"
  },
  {
    "id": 57,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "除細動成功後、自己心拍が再開したが自発呼吸が認められない。この時、人工呼吸を継続する頻度として適切なのはどれか？",
    "options": ["1分間に20回以上", "約6秒に1回（10回/分）", "約3秒に1回", "胸骨圧迫と同期して30：2"],
    "answer": 1,
    "explanation": "ROSC後で心拍はあるが呼吸がない成人の場合、約6秒に1回（10回/分）の人工呼吸を行います。[5, 22]",
    "reference": "救急蘇生法実施要領 p.3, 救急蘇生法 p.421"
  },
  {
    "id": 58,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "特定行為の指示要請で「具体的指示」を受けた救急救命士が行うべき対応として、正しいのはどれか？",
    "options": ["指示の内容が現場判断と異なる場合、独断で変更する", "医師と継続的に会話ができる状態を保持する", "指示を受けた後、無線を切り処置に専念する", "指示は一度受ければ、その後の容態変化にかかわらず継続する"],
    "answer": 1,
    "explanation": "具体的指示下では、容態の変化を随時報告し、継続的に医師と連携を保つ必要があります。[24, 44]",
    "reference": "薬剤投与業務プロトコール p.40, 救急医療体制 p.222"
  },
  {
    "id": 59,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "「内因性ロード＆ゴー」の生理学的評価項目において、心不全や心原性ショックを示唆する「皮膚の所見」はどれか？",
    "options": ["乾燥・温感", "冷汗・湿潤", "紅潮・乾燥", "黄染"],
    "answer": 1,
    "explanation": "心拍出量低下に伴う交感神経反射により、末梢血管が収縮し冷汗・湿潤を呈します。[14, 45]",
    "reference": "脳卒中プロトコール p.51, 急性冠症候群プロトコール p.55"
  },
  {
    "id": 60,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "アナフィラキシーで「喉頭浮腫による気道閉塞」が切迫している場合、救急救命士が最優先すべき行動はどれか？",
    "options": ["静脈路を確保し輸液を開始する", "エピペン（アドレナリン）を筋肉内注射する", "心電図モニターを装着する", "直ちに気管挿管の指示を要請する"],
    "answer": 1,
    "explanation": "気道閉塞が切迫している際は、静脈路確保に時間をかけるよりアドレナリンの筋注が最優先です。[46, 47]",
    "reference": "ショック p.469, 救急救命士が行う処置 p.391"
  },
  {
    "id": 61,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "交通事故現場で、同乗者が死亡している場合の受傷機転の評価はどれに該当するか？",
    "options": ["低リスク受傷機転", "中リスク受傷機転", "高リスク受傷機転", "評価対象外"],
    "answer": 2,
    "explanation": "同乗者の死亡は、生存者にも強いエネルギーが加わったことを意味する高リスク受傷機転の代表例です。[48, 49]",
    "reference": "受傷機転 p.690, 外傷の現場活動 p.712"
  },
  {
    "id": 62,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "乳児の心肺蘇生において、救助者が2名以上いる場合の「胸郭包み込み両母指圧迫法」の利点はどれか？",
    "options": ["1人でも長時間継続できる", "高い冠動脈灌流圧を維持しやすい", "肋骨骨折のリスクがゼロになる", "人工呼吸が不要になる"],
    "answer": 1,
    "explanation": "2本指圧迫法よりも安定して強く圧迫でき、より高い循環効率（冠動脈灌流圧）が得られます。[50, 51]",
    "reference": "心肺蘇生法実施要領 p.2, 救急蘇生法 p.377"
  },
  {
    "id": 63,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "食道閉鎖式エアウェイの挿入後、換気確認のために「5点聴診」を行う際、最初に聴診すべき部位はどこか？",
    "options": ["右肺尖部", "左肺底部", "心窩部（胃部）", "前胸部中央"],
    "answer": 2,
    "explanation": "食道挿管（意図的な場合も含む）の確認と、胃への送気による誤嚥リスクを確認するため、まず心窩部を聴診します。[52, 53]",
    "reference": "気道確保業務プロトコール p.31, 救急救命士が行う処置 p.361"
  },
  {
    "id": 64,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "一過性脳虚血発作（TIA）が疑われる傷病者の観察において、症状が消失していても注意すべき点はどれか？",
    "options": ["脳梗塞の強力な前駆症状であり、早期の医療機関受診が必要であること", "体温が低下していないか", "24時間は一切の飲食を控えること", "視力が回復していれば緊急性はない"],
    "answer": 0,
    "explanation": "TIAは脳梗塞の前兆であり、症状消失後も再発や本発症のリスクが非常に高い状態です。[33, 54]",
    "reference": "一過性意識消失と失神 p.521, 脳梗塞 p.550"
  },
  {
    "id": 65,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "敗血症性ショック（血液分布異常性ショック）において、初期に見られる「ウォーム・ショック」の状態はどれか？",
    "options": ["四肢冷感・血圧上昇", "四肢温感・頻脈・血圧低下", "徐脈・皮膚乾燥", "呼吸抑制・縮瞳"],
    "answer": 1,
    "explanation": "末梢血管の拡張により、初期には皮膚が温かい状態で血圧が低下する特徴があります。[55, 56]",
    "reference": "ショック p.466, 469"
  },
  {
    "id": 66,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "「クラッシュ症候群」において、圧迫解除後に急死する最大の原因はどれか？",
    "options": ["低ナトリウム血症による痙攣", "カリウム等の有害物質の急激な流入による心停止", "ミオグロビンによる急性肝不全", "骨折に伴う脂肪塞栓"],
    "answer": 1,
    "explanation": "細胞から流出した高濃度のカリウムが全身に回ることで、致死的な不整脈（心停止）を引き起こします。[57]",
    "reference": "四肢外傷 p.753"
  },
  {
    "id": 67,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心室細動（VF）に対し電気ショックを実施した直後、行うべき行動はどれか？",
    "options": ["直ちに頸動脈の脈拍を確認する", "直ちに胸骨圧迫から心肺蘇生を再開する", "心電図波形が変化するまで待機する", "2回目の電気ショックを連続して行う"],
    "answer": 1,
    "explanation": "ショック直後は心拍が再開していても有効な駆出ができないことが多いため、観察せずにCPRを再開します。[3, 58]",
    "reference": "電気的除細動実施上の注意事項 p.6, 救急蘇生法 p.422"
  },
  {
    "id": 68,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "静脈路確保の際、穿刺部位として「大伏在静脈」を選択する場合、解剖学的にどの部位を狙うのが一般的か？",
    "options": ["手首の親指側", "肘の内側", "足の内のくるぶし（内果）の前方", "足の甲（足背）中央"],
    "answer": 2,
    "explanation": "大伏在静脈は内果の前方を通り、体表から比較的穿刺しやすい静脈です。[59, 60]",
    "reference": "静脈路確保業務プロトコール p.37, 救急救命士が行う処置 p.386"
  },
  {
    "id": 69,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "急性心筋梗塞の合併症で、心筋壊死により心臓の壁が破れる病態を何と呼ぶか？",
    "options": ["心室中隔穿孔", "心タンポナーデ", "心破裂", "乳頭筋断裂"],
    "answer": 2,
    "explanation": "心筋壊死部が脆くなり、左室等の壁が破れるのが心破裂です。急速に心タンポナーデから心停止に至ります。[61]",
    "reference": "循環系疾患 p.571"
  },
  {
    "id": 70,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "低血糖による意識障害に対しブドウ糖溶液を投与する際、投与速度としてプロトコールで推奨されている目安はどれか？",
    "options": ["1本（20mL）あたり30秒以内", "1本（20mL）あたり90秒以上かけてゆっくり", "一気に急速投与（プッシュ）", "滴下数を確認しながら5分かけて"],
    "answer": 1,
    "explanation": "高浸透圧による血管痛や組織障害を避けるため、1本あたり90秒以上かけて慎重に投与します。[27, 62]",
    "reference": "ブドウ糖溶液の投与プロトコール p.49, 救急救命士が行う処置 p.394"
  },
  {
    "id": 71,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "頸椎損傷が強く疑われる傷病者に対し、ビデオ硬性喉頭鏡を用いた気管挿管を行う際の留意点はどれか？",
    "options": ["頭部を最大限に後屈させる", "頸椎カラーを装着したまま、または手動による頭部固定下で喉頭展開を行う", "スニッフィングポジションが必須である", "仰臥位ではなく側臥位で試行する"],
    "answer": 1,
    "explanation": "ビデオ喉頭鏡は頭部を動かさずに展開できる利点があり、固定を維持したまま挿管が可能です。[49, 63]",
    "reference": "気管挿管業務プロトコール p.23, 外傷の現場活動 p.712"
  },
  {
    "id": 72,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "成人女性の心停止傷病者。胸骨圧迫を行っている際に「妊娠後半（20週以降）」であることが判明した。追加すべき処置はどれか？",
    "options": ["用手的子宮左方移動（LUD）", "腹部突き上げ法の実施", "ショック体位の保持", "人工呼吸回数の倍増"],
    "answer": 0,
    "explanation": "巨大な子宮による下大静脈圧迫を解除するため、子宮を左側に寄せながら蘇生を行います。[21, 64]",
    "reference": "心肺蘇生法実施上の注意事項 p.5, 妊娠・分娩と救急疾患 p.672"
  },
  {
    "id": 73,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "静脈路確保の特定行為を2回試行したが失敗した。プロトコールに従ったその後の対応として正しいのはどれか？",
    "options": ["3回目の試行を別の隊員が行う", "さらに末梢側の細い血管で再試行する", "穿刺を断念し、現場滞在時間を延長せずに速やかに搬送する", "医師の指示なしに頸静脈穿刺に切り替える"],
    "answer": 2,
    "explanation": "穿刺は原則2回までです。失敗した場合は搬送を優先し、車内での再試行などは医師の指示を仰ぎます。[65, 66]",
    "reference": "静脈路確保業務プロトコール p.38, 救急救命士が行う処置 p.388"
  },
  {
    "id": 74,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳卒中プロトコールの「初期評価」において、内因性ロード＆ゴーを宣言すべき呼吸数はどれか？",
    "options": ["12〜18回/分", "20〜25回/分", "10回/分未満または30回/分以上", "一律で25回/分以上"],
    "answer": 2,
    "explanation": "生理学的異常の指標として、10未満または30以上が重症の基準です。[25, 45]",
    "reference": "脳卒中プロトコール p.51, 急性冠症候群プロトコール p.55"
  },
  {
    "id": 75,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "アナフィラキシーに伴う「クインケ浮腫（血管性浮腫）」が最も危険な部位はどこか？",
    "options": ["眼瞼（まぶた）", "手指", "咽頭・喉頭粘膜", "下腿"],
    "answer": 2,
    "explanation": "咽頭・喉頭粘膜に生じると、急速に気道を閉塞させ窒息に至るため、最も危険です。[67]",
    "reference": "局所の観察 p.313"
  },
  {
    "id": 76,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "高エネルギー外傷で、胸壁の一部が呼吸に合わせて周りと逆の動き（吸気時に陥凹、呼気時に膨隆）をする状態を何と呼ぶか？",
    "options": ["皮下気腫", "緊張性気胸", "奇異呼吸（フレイルチェスト）", "クスマウル呼吸"],
    "answer": 2,
    "explanation": "連続する複数の肋骨が2カ所以上で骨折した際に見られる特徴的な動きで、換気効率が著しく低下します。[68, 69]",
    "reference": "外傷の現場活動 p.711, 胸部外傷 p.735"
  },
  {
    "id": 77,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生における胸骨圧迫の質の評価について、最も適切な指標はどれか？",
    "options": ["頸動脈の脈拍触知の有無", "圧迫の深さと速さ", "瞳孔の大きさの変化", "傷病者の顔色の改善"],
    "answer": 1,
    "explanation": "脈拍では自己心拍か圧迫によるものか判別できないため、深さ（5〜6cm）と速さ（100〜120回/分）で管理します。[6, 50]",
    "reference": "救急蘇生法実施要領 p.2, 救急蘇生法 p.421"
  },
  {
    "id": 78,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "気管挿管のビデオ硬性喉頭鏡を使用する際、モニターに映る「ターゲットマーク」の中心に捉えるべき部位はどれか？",
    "options": ["喉頭蓋の先端", "食道入口部", "声門（声帯の間）", "舌根部"],
    "answer": 2,
    "explanation": "声門をターゲットの中心に捉え、その軸に合わせてチューブを送り込むことで確実に挿管できます。[70, 71]",
    "reference": "気管挿管業務プロトコール p.36, 救急救命士が行う処置 p.366"
  },
  {
    "id": 79,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "主幹脳動脈閉塞（LVO）を疑う「共同偏視」とはどのような状態を指すか？",
    "options": ["両眼がバラバラの方向を向いている", "両眼が左右どちらか一方をじっと見つめている", "眼球が上下に揺れている", "片方の眼だけが閉じている"],
    "answer": 1,
    "explanation": "脳の病変側（あるいは反対側）を両眼が凝視するように偏る所見で、重症脳卒中を示唆します。[72, 73]",
    "reference": "脳卒中プロトコール p.53, 局所の観察 p.313"
  },
  {
    "id": 80,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "ショック時の輸液において、乳酸リンゲル液が細胞外液補充液として優れている理由はどれか？",
    "options": ["ブドウ糖を豊富に含むため", "組成が血漿（細胞外液）に近く、血管内に留まりやすいため", "カリウムを一切含まないため", "血液を固める作用があるため"],
    "answer": 1,
    "explanation": "電解質組成がヒトの血漿に近く、大量出血等で失われた細胞外液を効率的に補うことができます。[74, 75]",
    "reference": "ショック p.466, 生命の維持 p.161"
  },
  {
    "id": 81,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "頭部外傷に伴う「脳ヘルニア」の初期徴候として、最も注意すべき観察所見はどれか？",
    "options": ["血圧の低下", "一側の瞳孔散大と対光反射の消失", "四肢の温感", "頻呼吸"],
    "answer": 1,
    "explanation": "脳圧亢進により動眼神経が圧迫されることで、損傷側の瞳孔が散大し、光に反応しなくなります。[76, 77]",
    "reference": "意識障害 p.490, 局所の観察 p.313"
  },
  {
    "id": 82,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生中、用手的な気道確保にかかわらず換気抵抗が強く、異物による気道閉塞が疑われた。喉頭鏡で確認したが異物を視認できない場合の対応は？",
    "options": ["直ちに盲目的指拭法を行う", "通常の心肺蘇生を継続しつつ、気道確保のたびに口腔内を確認する", "腹部突き上げ法に切り替える", "換気ができるまで胸骨圧迫を中止する"],
    "answer": 1,
    "explanation": "異物が見えない場合の盲目的指拭法は禁忌です。CPRを継続し、異物が上がってくるのを待ちます。[78, 79]",
    "reference": "人工呼吸実施上の注意事項 p.3, 異物 p.809"
  },
  {
    "id": 83,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "心停止傷病者へのアドレナリン投与において、2回目以降の追加投与を行う場合の間隔として適切なのはどれか？",
    "options": ["1分ごと", "3〜5分ごと", "10分ごと", "心拍が再開するまで連続して"],
    "answer": 1,
    "explanation": "アドレナリンの半減期等を考慮し、約3〜5分（リズムチェック2回に1回程度）の間隔で投与します。[80, 81]",
    "reference": "薬剤投与業務プロトコール p.41, 救急蘇生法 p.424"
  },
  {
    "id": 84,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "急性心筋梗塞（AMI）において、発症から治療開始（再灌流療法）までの目標時間は何分以内とされているか？",
    "options": ["60分以内", "90分以内", "120分以内", "180分以内"],
    "answer": 2,
    "explanation": "医療機関において、発症から120分以内の再灌流が強く推奨されており、迅速な搬送が求められます。[82]",
    "reference": "循環系疾患 p.570"
  },
  {
    "id": 85,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "重症の低血糖症において、脳に不可逆的な損傷（低血糖脳症）が生じ始める時間的目安はどれか？",
    "options": ["数秒", "数分", "数時間持続した場合", "24時間以上"],
    "answer": 2,
    "explanation": "低血糖そのものは除去できれば回復しますが、数時間の重篤な低血糖は脳死に近い状態を招く危険があります。[76, 83]",
    "reference": "意識障害 p.490, 代謝・内分泌系疾患 p.610"
  },
  {
    "id": 86,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "「緊張性気胸」において、患側の胸腔内圧が上昇することで起こる循環への悪影響はどれか？",
    "options": ["心拍数の急激な減少", "大静脈が圧迫され、静脈還流量が減少することによる血圧低下", "冠動脈の拡張による心不全", "肺血流の増加"],
    "answer": 1,
    "explanation": "陽圧になった胸腔が心臓や大静脈を圧迫（縦隔シフト）し、血液が心臓に戻れなくなることでショックに陥ります。[84, 85]",
    "reference": "外傷の現場活動 p.710, 胸部外傷 p.734"
  },
  {
    "id": 87,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "アドレナリンを静脈内投与する際、投与部位よりも中枢側で行うべき正しい手技はどれか？",
    "options": ["駆血帯を締めたままにする", "上肢を拳上させる", "投与部位を冷却する", "腕を心臓より低く保つ"],
    "answer": 1,
    "explanation": "重力と輸液の後押しを利用して、薬剤を速やかに中心循環へ届けるために上肢の挙上が必要です。[44, 81]",
    "reference": "薬剤投与業務プロトコール p.40, 救急蘇生法 p.424"
  },
  {
    "id": 88,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "気管挿管の「位置確認」において、呼気二酸化炭素検出器が「黄色」を示した。この所見が意味するものはどれか？",
    "options": ["二酸化炭素が検出されず、食道挿管の可能性が高い", "二酸化炭素が検出されており、気管挿管の可能性が高い", "酸素濃度が100%である", "吸引が必要な状態である"],
    "answer": 1,
    "explanation": "多くの検出器（イージーキャップ等）では、CO2に反応して紫から黄色に変化します。[9, 86]",
    "reference": "気管挿管業務プロトコール p.34, 救急救命士が行う処置 p.362"
  },
  {
    "id": 89,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "くも膜下出血を疑う傷病者に対し、現場で特に避けるべき刺激はどれか？",
    "options": ["大声での呼びかけ", "強い痛み刺激（意識確認のため）や光刺激", "毛布による保温", "酸素投与"],
    "answer": 1,
    "explanation": "強い刺激は再出血を誘発する恐れがあるため、可能な限り愛護的・静穏な対応が求められます。[87, 88]",
    "reference": "脳卒中プロトコール p.52, 神経系疾患 p.549"
  },
  {
    "id": 90,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "重症熱中症の病態において、多臓器不全の引き金となる「血液凝固異常」の名称はどれか？",
    "options": ["TIA", "CPR", "DIC（播種性血管内凝固症候群）", "ACS"],
    "answer": 2,
    "explanation": "高熱による血管内皮障害等から微小な血栓が全身に生じ、止血機能が失われる極めて危険な状態です。[19]",
    "reference": "熱中症 p.816"
  },
  {
    "id": 91,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "高エネルギー事故における「第2段階（解剖学的評価）」で、ロード＆ゴーと判断すべき所見はどれか？",
    "options": ["足首の単純骨折", "指先の小さな切創", "両側大腿骨骨折", "軽度の擦り傷"],
    "answer": 2,
    "explanation": "両側の大腿骨骨折は大量の出血（2000mL以上）を伴い、ショックに直結するため重症と判断します。[34, 89]",
    "reference": "外傷の現場活動 p.711, 712"
  },
  {
    "id": 92,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "119番通報を受信した通信指令員が、通報者に対し行う「口頭指導」の主な目的はどれか？",
    "options": ["救急隊の到着を遅らせるため", "医療機関の空き状況を調べるため", "救急隊到着までの「救命の連鎖」の空白を埋めるため", "診断名を確定させるため"],
    "answer": 2,
    "explanation": "バイスタンダーによる早期のCPR開始を促し、救命率を向上させることが最大の目的です。[90, 91]",
    "reference": "救急医療体制 p.220, 消防機関における救急活動の流れ p.245"
  },
  {
    "id": 93,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "静脈路確保の特定行為を車内で実施する際、原則として車両をどのような状態にすべきか？",
    "options": ["最高速度で走行する", "安全な場所に停車させる", "蛇行運転を避ける", "窓を全開にする"],
    "answer": 1,
    "explanation": "精密な手技であるため、原則として停車した状態で実施することがプロトコールで定められています。[65, 66]",
    "reference": "静脈路確保業務プロトコール p.38, 救急救命士が行う処置 p.388"
  },
  {
    "id": 94,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "急性心筋梗塞が疑われる傷病者の観察中、モニター心電図に「RonT型」の心室性期外収縮が出現した。次に予測される致死的不整脈はどれか？",
    "options": ["洞性頻脈", "第3度房室ブロック", "心室細動（VF）", "心房細動"],
    "answer": 2,
    "explanation": "T波の頂点付近（脆弱期）に刺激が重なると、心筋が電気的に混乱しVFへ移行しやすくなります。[26, 92]",
    "reference": "心肺停止 p.480, 循環系疾患 p.572"
  },
  {
    "id": 95,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "ショック時の「平均動脈圧」を算出する計算式として正しいのはどれか？",
    "options": ["収縮期血圧 ＋ 拡張期血圧", "（収縮期血圧 － 拡張期血圧）÷ 3 ＋ 拡張期血圧", "収縮期血圧 × 2 － 拡張期血圧", "一律で 100mmHg とみなす"],
    "answer": 1,
    "explanation": "拡張期の時間が長いため、単純平均ではなく脈圧の1/3を拡張期血圧に足して求めます。[93]",
    "reference": "循環系 p.117"
  },
  {
    "id": 96,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "頭部外傷の観察において、耳の後ろに現れる皮下出血（Battle徴候）は何の骨折を示唆するか？",
    "options": ["前頭蓋底骨折", "中頭蓋底骨折", "顔面骨骨折", "頸椎骨折"],
    "answer": 1,
    "explanation": "中頭蓋底（側頭骨岩様部など）の骨折により、耳介後部に血液が浸潤することで現れます。[94]",
    "reference": "頭部外傷 p.719"
  },
  {
    "id": 97,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生における「胸骨圧迫の解除」が不十分（もとに戻らない）であった場合の影響はどれか？",
    "options": ["肋骨骨折が防げる", "静脈還流量が減少し、心拍出量が低下する", "人工呼吸がしやすくなる", "脳への血流が維持される"],
    "answer": 1,
    "explanation": "胸腔内圧が下がらないため、血液が心臓に戻りづらくなり、結果として送り出す血量も減ってしまいます。[50, 93]",
    "reference": "救急蘇生法実施要領 p.2, 救急蘇生法 p.376"
  },
  {
    "id": 98,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "気管挿管のビデオ硬性喉頭鏡を使用中、モニター画面で声門は捉えているがチューブがうまく進まない場合の対処として、適切でないのはどれか？",
    "options": ["甲状軟骨を圧迫して声門の位置を微調整する", "一旦抜去し、再度マッキントッシュ型喉頭鏡で試みる", "チューブの先端を少し回転させてみる", "サクション（吸引）を行い視野をさらに改善する"],
    "answer": 1,
    "explanation": "ビデオ喉頭鏡で声門が見えているなら、まずはそのデバイスの特性に合わせた調整（角度変更やBURP）を優先すべきです。[71, 95]",
    "reference": "気管挿管業務プロトコール p.36, 救急救命士が行う処置 p.366"
  },
  {
    "id": 99,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳卒中プロトコールにおいて「JCS300で両側瞳孔散大」を認める場合、どのような病態が強く疑われるか？",
    "options": ["軽度の脳震盪", "末期の脳ヘルニア", "精神的な錯乱", "低血糖"],
    "answer": 1,
    "explanation": "深昏睡かつ両側散瞳は、脳幹部まで圧迫が及んでいる末期の脳ヘルニア徴候（内因性ロード＆ゴー）です。[45, 76]",
    "reference": "脳卒中プロトコール p.51, 意識障害 p.490"
  },
  {
    "id": 100,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "高血糖による「高浸透圧高血糖症候群（HHS）」について、糖尿病ケトアシドーシス（DKA）と比較したときの特徴はどれか？",
    "options": ["若年者に多く、クスマウル呼吸が顕著である", "高齢者に多く、著しい脱水と意識障害を伴うが、酸臭はない", "血糖値はあまり上昇しない", "1型糖尿病の典型的な急性合併症である"],
    "answer": 1,
    "explanation": "2型糖尿病の高齢者に多く、ケトン体蓄積が少ないためクスマウル呼吸は目立ちませんが、高度な脱水が特徴です。[17, 96]",
    "reference": "代謝・内分泌系疾患 p.609, 610"
  },
  {
    "id": 101,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "外傷における「防ぎ得た外傷死（PTD）」を防ぐために救急隊に求められる最も重要な戦術はどれか？",
    "options": ["現場で点滴を全量投与し終えるまで滞在する", "全ての骨折部位を丁寧に副子固定してから搬送する", "ロードアンドゴーにより現場滞在時間を短縮し、適切な医療機関へ迅速に搬送する", "傷病者の家族から詳細な社会歴を聴取する"],
    "answer": 2,
    "explanation": "根本治療（止血手術等）までの時間を最短にすることが救命率向上に直結します。[49, 97]",
    "reference": "外傷救急医学 p.689, 外傷の現場活動 p.712"
  },
  {
    "id": 102,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "自動体外式除細動器（AED）の電極パッドを貼る際、傷病者の胸部に湿布薬が貼られていた場合の正しい対応は？",
    "options": ["湿布の上からパッドを貼る", "湿布を剥がし、薬剤を拭き取ってからパッドを貼る", "湿布がある側はパッドを貼らず、反対側のみ貼る", "電気ショックを諦め、胸骨圧迫のみ行う"],
    "answer": 1,
    "explanation": "薬剤が残っていると通電時に火傷の原因となったり、効果が減弱するため、剥がして拭き取る必要があります。[98]",
    "reference": "救急救命士が行う処置 p.380"
  },
  {
    "id": 103,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "気管挿管の試行中、コーマックグレードが「4（舌根部しか見えない）」であった。この時の対応として適切なのはどれか？",
    "options": ["さらに強く喉頭鏡を持ち上げる", "直ちに挿管を断念し、他の気道確保法に切り替える", "盲目的にチューブを差し込む", "スニッフィングポジションをさらに深くする"],
    "answer": 1,
    "explanation": "グレード4は通常の方法では困難であり、時間を浪費するより他の確実な方法（LMA等）へ移行すべきです。[10]",
    "reference": "救急救命士が行う処置 p.362"
  },
  {
    "id": 104,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "急性冠症候群（ACS）が疑われる傷病者。バイタルサインは安定しているが、胸痛を訴えている。現場で行うべき処置として適切なのはどれか？",
    "options": ["傷病者の希望に応じて、硝酸薬（ニトロペン等）の舌下補助を行う", "予防的に胸骨圧迫を開始する", "血圧を100mmHg以下に下げるよう指導する", "酸素を10L/分で全開投与する"],
    "answer": 0,
    "explanation": "本人の処方薬がある場合、補助は認められています。酸素はSpO2 90%未満でない限りルーチン投与は推奨されません。[82, 99]",
    "reference": "循環系疾患 p.570"
  },
  {
    "id": 105,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "「心外閉塞・拘束性ショック」に分類される病態はどれか？",
    "options": ["急性心筋梗塞", "緊張性気胸", "アナフィラキシー", "重症脱水"],
    "answer": 1,
    "explanation": "心臓の外側からの圧迫（気胸、心タンポナーデ等）により、心臓が十分に拡張できず血液を送れないショックです。[55, 100]",
    "reference": "ショック p.466, 468"
  },
  {
    "id": 106,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "頭部外傷の「意識清明期（ルシッド・インターバル）」が典型的に見られる脳損傷はどれか？",
    "options": ["脳挫傷", "急性硬膜下血腫", "急性硬膜外血腫", "びまん性軸索損傷"],
    "answer": 2,
    "explanation": "中硬膜動脈等の損傷により、一旦意識が戻った後に血腫が増大して再び昏睡に陥るのが特徴です。[101, 102]",
    "reference": "頭部外傷 p.717"
  },
  {
    "id": 107,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生中の「人工呼吸」において、過剰な送気が循環に与える悪影響はどれか？",
    "options": ["血圧が急上昇する", "胸腔内圧が上昇し、心臓への還流血量が減少する", "心拍数が減少する", "脳血流量が増加する"],
    "answer": 1,
    "explanation": "過剰な陽圧換気は、大静脈を圧迫し心臓への戻り（前負荷）を減らし、蘇生率を下げます。[6]",
    "reference": "救急蘇生法 p.421"
  },
  {
    "id": 108,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "特定行為の「アドレナリン投与」において、医師の指示を受ける際、救急救命士が伝えるべき必須の情報ではないものはどれか？",
    "options": ["傷病者の年齢（推定含む）", "現在行っているCPRの内容", "傷病者の血液型", "心電図波形"],
    "answer": 2,
    "explanation": "血液型は現場での特定行為の判断には不要です。年齢、病態、波形、処置状況が重要です。[23, 24]",
    "reference": "救急救命処置について p.10, 救急医療体制 p.222"
  },
  {
    "id": 109,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "「シンシナティ脳卒中スケール（CPSS）」で一つでも異常が認められた場合、脳卒中である確率は統計的におよそ何％とされるか？",
    "options": ["30%", "50%", "70%", "90%"],
    "answer": 2,
    "explanation": "CPSSは簡便ながら、1項目の異常だけで約70%の高い確率で脳卒中を同定できます。[103, 104]",
    "reference": "神経系疾患 p.548"
  },
  {
    "id": 110,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "インスリン治療中の糖尿病患者が、激しい運動後に意識障害（JCS20）を呈した。最も疑うべき病態はどれか？",
    "options": ["高浸透圧高血糖症候群", "低血糖症", "糖尿病ケトアシドーシス", "乳酸アシドーシス"],
    "answer": 1,
    "explanation": "運動によりブドウ糖が消費されたにもかかわらずインスリンが効きすぎて血糖値が急降下したと考えられます。[105, 106]",
    "reference": "代謝・内分泌系疾患 p.607, 610"
  },
  {
    "id": 111,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "広範囲熱傷の傷病者に対し、現場で最初に行うべき最も重要な救急救命処置はどれか？",
    "options": ["冷却のみを長時間継続する", "気道確保と高濃度酸素投与（気道熱傷の疑いに対して）", "全ての衣服をハサミで脱がせる", "ステロイド軟膏を塗布する"],
    "answer": 1,
    "explanation": "気道熱傷による喉頭浮腫は急速に窒息を招くため、冷却よりまず気道の評価・管理が優先です。[107, 108]",
    "reference": "熱傷 p.764"
  },
  {
    "id": 112,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生において、胸骨圧迫の交代要員がいる場合、中断を最小にするための交代のタイミングとして推奨されるのはどれか？",
    "options": ["5分ごと", "疲れたと感じたとき", "約2分（または5サイクル）ごと", "10分ごと"],
    "answer": 2,
    "explanation": "疲労による質の低下を防ぐため、リズムチェックのタイミングに合わせた2分ごとの交代が推奨されます。[21, 22]",
    "reference": "心肺蘇生法実施上の注意事項 p.5, 救急蘇生法 p.421"
  },
  {
    "id": 113,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "気管挿管資格のある救急救命士が、ビデオ硬性喉頭鏡を使用して挿管を試みたが、1回目は失敗した。プロトコール上、次にとるべき行動は？",
    "options": ["直ちに中止しLMAを入れる", "一旦30秒程度CPRを行い、もう1回だけ挿管を再試行する", "失敗した原因を考えず、同じ方法で即座に再試行する", "成功するまで何度でも繰り返す"],
    "answer": 1,
    "explanation": "原則2回まで試行可能です。1回失敗後は、酸素化（CPR）を挟んでから、スニッフィングポジションの修正等を行い再試行します。[9, 109]",
    "reference": "気管挿管業務プロトコール p.34, 救急救命士が行う処置 p.358"
  },
  {
    "id": 114,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳梗塞の血栓回収療法の適応を判断する「LVOスケール」に含まれる項目はどれか？",
    "options": ["嘔吐", "失語", "低血圧", "頭痛"],
    "answer": 1,
    "explanation": "失語（優位半球障害）は、主幹脳動脈閉塞を示唆する重要な評価項目の一つです。[72]",
    "reference": "脳卒中プロトコール p.53"
  },
  {
    "id": 115,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "肝不全の末期に見られる、手首を反らせた時に起こる粗い振るえを何と呼ぶか？",
    "options": ["羽ばたき振戦", "痙攣", "チック", "舞踏病運動"],
    "answer": 0,
    "explanation": "アンモニア蓄積等による肝性脳症の際に出現する特徴的な不随意運動です。[110, 111]",
    "reference": "消化系疾患 p.591"
  },
  {
    "id": 116,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "腹部外傷で「腸管が露出」している傷病者への対応として、正しいのはどれか？",
    "options": ["直ちに腹腔内に押し戻す", "乾燥を防ぐために生理食塩水を含ませたガーゼやラップ等で保護する", "露出部を強く圧迫止血する", "露出部に直接消毒薬を塗る"],
    "answer": 1,
    "explanation": "還納は感染や損傷のリスクがあるため禁忌です。湿潤状態を保って保護し、速やかに搬送します。[112, 113]",
    "reference": "外傷の現場活動 p.711, 腹部外傷 p.742"
  },
  {
    "id": 117,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生中の「除細動器の解析中」に、救急隊員が絶対に避けるべき行動はどれか？",
    "options": ["時計を確認する", "傷病者に触れること", "救急車を停車させること", "大きな声で周囲に知らせること"],
    "answer": 1,
    "explanation": "振動やノイズが混入すると、波形の正確な解析ができず、不適切なショック指示が出る恐れがあります。[114]",
    "reference": "救急救命士が行う処置 p.381"
  },
  {
    "id": 118,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "乳酸リンゲル液の投与（輸液）中に、刺入部の皮膚が腫脹してきた。最も疑われる状況はどれか？",
    "options": ["輸液の温度が低すぎる", "血管外漏出", "傷病者の血圧が上昇した", "カテーテルのサイズが大きすぎる"],
    "answer": 1,
    "explanation": "留置針が血管から外れ、周囲の組織に液が漏れている徴候です。直ちに中止し抜去する必要があります。[115, 116]",
    "reference": "静脈路確保業務プロトコール p.39, 救急救命士が行う処置 p.387"
  },
  {
    "id": 119,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "急性心筋梗塞で「心源性ショック」に陥った傷病者のバイタルサインの特徴はどれか？",
    "options": ["血圧低下・徐脈・四肢温感", "血圧低下・頻脈・四肢冷感", "血圧上昇・頻脈・顔面紅潮", "正常血圧・不規則呼吸"],
    "answer": 1,
    "explanation": "心ポンプ機能低下を補うため、反射的な頻脈と末梢血管収縮（冷感）が起こります。[2, 55]",
    "reference": "ショック p.467"
  },
  {
    "id": 120,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "脱水症の傷病者において、皮膚を摘み上げた後に元の状態に戻るのが遅れる現象を何と呼ぶか？",
    "options": ["浮腫", "ツルゴール低下", "チアノーゼ", "落屑"],
    "answer": 1,
    "explanation": "皮膚の緊張（ツルゴール）は水分の含有量を反映するため、脱水では戻りが遅くなります。[105, 117]",
    "reference": "代謝・内分泌系疾患 p.611, 腹痛 p.532"
  },
  {
    "id": 121,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "「開放性気胸」の傷病者に対し、創部をガーゼやアルミシートで覆う際に行う「三辺固定（三辺テーピング）」の目的はどれか？",
    "options": ["傷口を完全に密封し空気を入れないようにするため", "吸気時に創を閉じ、呼気時に創から空気を逃がす「チェックバルブ」の効果を期待するため", "止血を容易にするため", "肺を直接圧迫するため"],
    "answer": 1,
    "explanation": "完全に密封すると緊張性気胸へ移行する恐れがあるため、呼気時に空気が抜ける余地を作ります。[84, 85]",
    "reference": "外傷の現場活動 p.711, 胸部外傷 p.734"
  },
  {
    "id": 122,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "「救命の連鎖」の第1の輪である「心停止の予防」について、小児において特に重要な内容はどれか？",
    "options": ["脂質異常症の改善", "不慮の事故（窒息・溺水等）の防止", "定期的な心電図検診", "適度なジョギング"],
    "answer": 1,
    "explanation": "小児の心停止は外因性の事故による呼吸停止が先行することが多いため、事故防止が最大の予防策です。[118]",
    "reference": "救急医療体制 p.221"
  },
  {
    "id": 123,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "特定行為の「気管挿管」において、チューブ固定後も継続的に行うべき最も重要な観察項目はどれか？",
    "options": ["傷病者の体温の変化", "門歯の位置でのチューブの深さ（ズレの確認）", "救急車の走行速度", "家族の同意の再確認"],
    "answer": 1,
    "explanation": "頭部の動きや搬送の振動で、チューブが奥へ入りすぎたり（片肺挿管）、抜けたり（食道挿管）することを防ぐためです。[86, 119]",
    "reference": "気管挿管業務プロトコール p.35, 救急救命士が行う処置 p.362"
  },
  {
    "id": 124,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "「脳梗塞」を疑う傷病者で、発症時刻が不明（朝起きたら症状があった等）な場合に、医療機関へ伝えるべき最も重要な情報はどれか？",
    "options": ["前日の夕食の内容", "「最後に元気であったことが確認された時刻（最終未発症時刻）」", "家族の生年月日", "傷病者の血液型"],
    "answer": 1,
    "explanation": "t-PA療法等の適応時間は「最終未発症時刻」を起点に判断されるため、極めて重要な情報です。[13, 33]",
    "reference": "脳卒中プロトコール p.53, 神経系疾患 p.550"
  },
  {
    "id": 125,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "ショック時の「全末梢血管抵抗（SVR）」が上昇している病態において、皮膚に見られる特徴的な徴候はどれか？",
    "options": ["皮膚の紅潮・温感", "皮膚の蒼白・冷感", "皮膚の乾燥・多毛", "浮腫の消失"],
    "answer": 1,
    "explanation": "代償機転として末梢血管が収縮するため、皮膚への血流が減り、蒼白かつ冷たくなります。[55, 120]",
    "reference": "ショック p.466, 467"
  },
  {
    "id": 126,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "頭部外傷の後に「片側の瞳孔散大」と「対側の運動麻痺」が出現した。これはどの病態を強く示唆するか？",
    "options": ["脳震盪", "低血糖", "鉤回（テント切痕）ヘルニア", "脊髄損傷"],
    "answer": 2,
    "explanation": "側頭葉の内側（鉤回）が動眼神経と錐体路を圧迫することで生じる、緊急度の極めて高い徴候です。[121, 122]",
    "reference": "重症脳障害 p.475, 意識障害 p.490"
  },
  {
    "id": 127,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "自動体外式除細動器（AED）を使用する際、傷病者の胸部に「植込み型心臓ペースメーカー」の盛り上がりがある場合の対応として、正しいのはどれか？",
    "options": ["ペースメーカーの直上に重ねてパッドを貼る", "盛り上がりから数センチ（少なくとも3cm以上）離してパッドを貼る", "ペースメーカーがある場合は電気ショックを行わない", "パッドを背中にのみ貼る"],
    "answer": 1,
    "explanation": "直上に貼ると通電が阻害されたり、機器を破損させる恐れがあるため、位置をずらします。[98, 123]",
    "reference": "救急救命士が行う処置 p.380"
  },
  {
    "id": 128,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "静脈路確保の際、輸液バッグのドリップチャンバー内に満たす液量の目安として適切なのはどれか？",
    "options": ["全体を満杯にする", "1/3〜1/2程度", "ほんの数滴のみ", "空のままにする"],
    "answer": 1,
    "explanation": "液が多すぎると滴下確認ができず、少なすぎると空気が回路内に入るリスクがあるため、1/2程度が適切です。[124, 125]",
    "reference": "救急救命士が行う処置 p.385"
  },
  {
    "id": 129,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "「急性大動脈解離」が疑われる傷病者において、バイタルサイン測定時に特に注意して比較すべき点はどれか？",
    "options": ["左右の上肢の血圧差および脈拍の左右差", "吸気時と呼気時の心拍数", "手と足の温度差", "耳と喉の痛み"],
    "answer": 0,
    "explanation": "解離が分枝に及ぶと、左右で血圧差（20mmHg以上等）が生じるため、鑑別上極めて重要です。[126, 127]",
    "reference": "めまい p.508, 救急救命士が行う処置 p.337"
  },
  {
    "id": 130,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "体液の酸塩基平衡において、正常な「血液のpH」の範囲はどれか？",
    "options": ["6.80 〜 7.00", "7.15 〜 7.25", "7.35 〜 7.45", "7.55 〜 7.65"],
    "answer": 2,
    "explanation": "血液は弱アルカリ性（7.4±0.05）に極めて厳密に維持されています。[128, 129]",
    "reference": "人体を構成する要素 p.61"
  },
  {
    "id": 131,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "外傷における「詳細観察」のタイミングとして、適切なのはどれか？",
    "options": ["現場到着直後、何よりも最初に行う", "緊急処置が終了し、搬送を開始した救急車内などで、時間的余裕がある時", "ロードアンドゴーを宣言する前", "心停止を判断する前"],
    "answer": 1,
    "explanation": "詳細観察は現場滞在を延ばさないよう、優先順位を下げて搬送中等に行います。[130]",
    "reference": "外傷の現場活動 p.714"
  },
  {
    "id": 132,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "1歳未満の乳児に対する一次救命処置（BLS）で、心停止と判断する基準の一つである「上腕動脈の拍動確認」の部位はどこか？",
    "options": ["手首の親指側", "肘の表側中央", "上腕の内側中央部", "脇の下"],
    "answer": 2,
    "explanation": "乳児は首が短く頸動脈が触れにくいため、上腕の内側で脈を確認します。[37]",
    "reference": "救急蘇生法 p.425"
  },
  {
    "id": 133,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "「救急救命士法」において、救急救命士が救急救命処置を行うことができる「場所」の制限について正しいのはどれか？",
    "options": ["病院内であればどこでも可能", "救急車内および重度傷病者を救急車に乗せるまでの間に限られる", "個人の住宅内では一切禁止されている", "場所の制限は全くない"],
    "answer": 1,
    "explanation": "法44条により、救急用自動車等および搬送のために乗せるまでの場所に限定されています。[131]",
    "reference": "救急救命士に関連する法令 p.263"
  },
  {
    "id": 134,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "「脳卒中」の疑いがある傷病者が嘔吐した場合の、最も適切な搬送体位はどれか？",
    "options": ["仰臥位（仰向け）", "側臥位（横向き）", "ショック体位", "伏臥位（うつ伏せ）"],
    "answer": 1,
    "explanation": "吐物による窒息や誤嚥性肺炎を防ぐため、顔を横に向ける側臥位が鉄則です。[132, 133]",
    "reference": "頭痛 p.496, 救急救命士が行う処置 p.396"
  },
  {
    "id": 135,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "高度の脱水により「血漿浸透圧が上昇」した際、分泌が促進され、腎臓での水の再吸収を促すホルモンはどれか？",
    "options": ["インスリン", "アドレナリン", "抗利尿ホルモン（ADH/バソプレシン）", "グルカゴン"],
    "answer": 2,
    "explanation": "下垂体後葉から分泌され、尿を濃縮して体内の水分を保持しようと働きます。[133]",
    "reference": "内分泌系 p.140"
  },
  {
    "id": 136,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "交通事故で「バックル（シートベルト）痕」を腹部に認める傷病者において、特に損傷を疑うべき内臓はどれか？",
    "options": ["脳", "肺", "膵臓や小腸などの腹腔内臓器", "骨格筋"],
    "answer": 2,
    "explanation": "シートベルトによる強い圧迫により、腹部実質臓器や管腔臓器が損傷（シートベルト外傷）している可能性が高いです。[134]",
    "reference": "腹部外傷 p.741"
  },
  {
    "id": 137,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生法（CPR）において、救助者が2人以上いる場合の「胸骨圧迫の交代」に要する時間の目標はどれか？",
    "options": ["5秒以内", "10秒以内", "15秒以内", "30秒以内"],
    "answer": 0,
    "explanation": "絶え間のない圧迫を維持するため、交代による中断は5秒以内を目指します。[6, 21]",
    "reference": "心肺蘇生法実施上の注意事項 p.5, 救急蘇生法 p.421"
  },
  {
    "id": 138,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "「具体的指示」を出す医師が、救急救命士からの報告において、最も重視する情報の組み合わせはどれか？",
    "options": ["傷病者の趣味と職業", "発症状況・バイタルサイン・心電図波形", "家族の住所と電話番号", "救急車の現在地とガソリン残量"],
    "answer": 1,
    "explanation": "医学的判断（指示）を下すためには、現在進行形の病態把握に直結する情報が不可欠です。[23, 24]",
    "reference": "救急救命処置について p.10, 救急医療体制 p.222"
  },
  {
    "id": 139,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "「くも膜下出血」の典型的な主訴として、正しいものはどれか？",
    "options": ["数日前からじわじわ痛む頭痛", "バットで殴られたような、突然の激しい頭痛", "夕方になると強くなる頭痛", "肩こりを伴う重苦しい頭痛"],
    "answer": 1,
    "explanation": "脳動脈瘤の破裂により、発症時刻が明確な突発的激痛が生じるのが特徴です。[87, 135]",
    "reference": "脳卒中プロトコール p.52, 神経系疾患 p.552"
  },
  {
    "id": 140,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "「低血糖」の初期症状として、交感神経刺激症状により現れるものはどれか？",
    "options": ["冷汗・動悸・手指振戦", "多尿・口渇", "高熱", "皮膚の乾燥"],
    "answer": 0,
    "explanation": "血糖値を上げようとするアドレナリン放出に伴い、これらの症状が出現します。[83, 105]",
    "reference": "代謝・内分泌系疾患 p.610"
  },
  {
    "id": 141,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "外傷傷病者の「緊急度・重症度判断」における「第3段階（受傷機転）」で、注意すべき要因に含まれないのはどれか？",
    "options": ["高所からの墜落", "爆発", "傷病者の血液型", "体幹部の挟圧"],
    "answer": 2,
    "explanation": "受傷機転の評価にはエネルギーの大きさが重要であり、血液型は含まれません。[49, 89]",
    "reference": "外傷の現場活動 p.712"
  },
  {
    "id": 142,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "119番通報で「反応がない」という情報に基づき出動中。指令員が通報者に心肺蘇生を指導している。この「口頭指導」の法的根拠が含まれる法律はどれか？",
    "options": ["医師法", "消防法", "救急救命士法", "道路交通法"],
    "answer": 1,
    "explanation": "救急業務の一環として消防法に基づき実施されます。[91]",
    "reference": "消防機関における救急活動の流れ p.245"
  },
  {
    "id": 143,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "「救急救命士法」で定められた「誠実義務（第45条）」の内容として、正しいのはどれか？",
    "options": ["いかなる時も自分の判断を優先させること", "常に医師と連絡を取り、傷病者の状態を正確に伝えるよう努めること", "救急車を最高速度で運転すること", "処置の記録を一切残さないこと"],
    "answer": 1,
    "explanation": "医師の指示が正しく行われるよう、現場の情報を正確に伝え連携する義務があります。[136]",
    "reference": "救急救命士に関連する法令 p.264"
  },
  {
    "id": 144,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "脳卒中の観察で、麻痺側の麻痺の程度をみるために「ドロッピングテスト」を行った。麻痺側の上肢はどうなるか？",
    "options": ["ゆっくりと円を描いて落ちる", "健側よりも速やかに、バタンと落下する", "一定の位置で静止する", "健側よりゆっくり落ちる"],
    "answer": 1,
    "explanation": "筋緊張が失われているため、重力に従って抵抗なく落下します。[137]",
    "reference": "救急救命士が行う処置 p.326"
  },
  {
    "id": 145,
    "level": "3",
    "category": "simulation",
    "subCategory": "shock_metabolic",
    "text": "体内の「浸透圧」を維持するために最も寄与している電解質（イオン）はどれか？",
    "options": ["カリウムイオン", "カルシウムイオン", "ナトリウムイオン", "マグネシウムイオン"],
    "answer": 2,
    "explanation": "ナトリウムは細胞外液の主要な陽イオンであり、水を引き付ける力（浸透圧）の主役です。[128, 138]",
    "reference": "人体を構成する要素 p.61, 生命の維持 p.159"
  },
  {
    "id": 146,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "「頭部外傷」を負った傷病者の意識レベルが、現場到着時のJCS10から、車内収容時にJCS100へと急速に悪化した。この状況の評価として正しいのはどれか？",
    "options": ["容態が安定してきている", "緊急度が極めて高く、脳ヘルニア等が進行している可能性がある", "睡眠不足によるものなので様子を見る", "血圧が上がれば意識は戻る"],
    "answer": 1,
    "explanation": "進行性の意識障害悪化は、脳内血腫の増大等による切迫した生命危機を示します。[131, 139]",
    "reference": "外傷の現場活動 p.713, 頭部外傷 p.720"
  },
  {
    "id": 147,
    "level": "3",
    "category": "simulation",
    "subCategory": "cpa_algo",
    "text": "心肺蘇生における「胸骨圧迫の深さ」の評価について、成人の場合、適切な表現はどれか？",
    "options": ["4cm程度", "少なくとも5cm（ただし6cmを超えない）", "胸が半分になるまで", "感触で決める"],
    "answer": 1,
    "explanation": "十分な深さ（5cm）が必要ですが、6cmを超えると合併症のリスクが高まります。[22, 50]",
    "reference": "救急蘇生法実施要領 p.2, 救急蘇生法 p.420"
  },
  {
    "id": 148,
    "level": "3",
    "category": "simulation",
    "subCategory": "als_judgment",
    "text": "「救急救命士」が、医師の具体的指示なしに行うことができる処置はどれか？",
    "options": ["アドレナリンの投与", "気管挿管", "自動体外式除細動器（AED）による除細動", "ブドウ糖溶液の投与"],
    "answer": 2,
    "explanation": "除細動は、機器が適応を判断する半自動モード等において包括的指示（事前に定められた手順）下で実施可能です。[131, 140]",
    "reference": "救急救命処置について p.12, 救急救命士に関連する法令 p.263"
  },
  {
    "id": 149,
    "level": "3",
    "category": "simulation",
    "subCategory": "stroke_acs",
    "text": "「脳梗塞」の病型分類において、心房細動などによる心臓内の血栓が脳へ飛んで起こるものを何と呼ぶか？",
    "options": ["ラクナ梗塞", "アテローム血栓性脳梗塞", "心原性脳塞栓症", "脳出血"],
    "answer": 2,
    "explanation": "心臓（光源）から血栓が流れてくるのが塞栓症です。広範囲の梗塞になりやすく重症度が高いです。[103, 104]",
    "reference": "神経系疾患 p.548"
  },
  {
    "id": 150,
    "level": "3",
    "category": "simulation",
    "subCategory": "special_trauma",
    "text": "「JPTEC」の概念に基づく、外傷傷病者への接触から搬送開始までの活動において、最も重視される「時間」の名称はどれか？",
    "options": ["プラチナ・テン（10分以内の現場出発）", "ゴールデン・アワー（60分以内の根本治療）", "シルバー・タイム", "レスキュー・ミニッツ"],
    "answer": 0,
    "explanation": "重症外傷では現場滞在を10分以内（プラチナ・テン）に抑え、1時間以内に手術（ゴールデン・アワー）を開始することを目指します。[49, 97]",
    "reference": "外傷救急医学 p.690, 外傷の現場活動 p.712"
  }
]
